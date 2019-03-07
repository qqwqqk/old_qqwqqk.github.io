//一些全局变量
var rotate_timer = null;           //旋转时间计时器
var progress_timer = null;         //进度时间计时器

window.onload = function(){
    var player = document.getElementById("current_player");
    var music = document.getElementById("current_music");
    var loop = document.getElementById("current_loop");
    player.value = 0;
    music.value = 0;
    loop.value = 0;
    var url="xmls/66CCFF.xml"
    InitListFull(url);
}

//页面初始设置
function InitListFull(role){
    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlhttp.open("GET", role, false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("music");
    document.getElementById("count_music").value = sites.length;

    for(var i=0; i<sites.length; i++){
        var id = i;
        var name = sites[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var icon = sites[i].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
        var img = sites[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
        var url = sites[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        AddLists(id, name, icon, img, url);
    }

    if(i>0){
        document.getElementById("listshow0").onclick();
    }
}

//添加歌单文件
function AddLists(id, name, icon, img, url){
    var player = document.getElementById("current_player");
    var newDiv = document.createElement("input");
    var str = 'listshow' + id;
    newDiv.id = str;
    newDiv.value = name;
    newDiv.type = "button";
    newDiv.onclick = function () { ClickedList(id, name, icon, img, url);};
    if(parseInt(id) === parseInt(player.value)){ newDiv.className = "list_music_play"; }else{ newDiv.className = "list_music";}
    document.getElementById("list_show").appendChild(newDiv);
}

//单击歌单文件
function ClickedList(id, name, icon, img, url){
    var c_music = document.getElementById("current_music");
    var c_player = document.getElementById("current_player");
    var rotate_deg = document.getElementById('img_rotate');

    c_music.currentTime = 0;
    rotate_deg.value = 0;

    if(parseInt(id) === parseInt(c_music.value)){ }else{
        var o_str = 'listshow' + c_music.value;
        var c_str = 'listshow' + id;
        var o_select = document.getElementById(o_str);
        var c_select = document.getElementById(c_str);
        o_select.className = "list_music";
        c_select.className = "list_music_play";
    }

    var s_name = document.getElementById("music_name");
    var s_icon = document.getElementById("show_icon");
    var s_img = document.getElementById("show_img");
    var music = document.getElementById("music");

    c_music.value = id;
    s_name.value = name;
    s_icon.src = icon;
    s_img.src = img;
    music.src = url;

    s_img.style.transform="rotate(0deg)";
    if(parseInt(c_player.value) === 1){
        music.play();
    }
}

//单击播放按键
function ClickedPlay(){
    var c_player = document.getElementById("current_player");
    var btn_player = document.getElementById("btn_play");
    var music = document.getElementById("music");
    var c_loop = document.getElementById("current_loop");

    if(parseInt(c_player.value)){
        //c_player = 1 当前为播放状态  转为暂停
        c_player.value = 0;
        btn_player.className = "btn_play_css";
        music.pause();
        ProgressPause();
    }else{
        //c_player = 0 当前为暂停状态  转为播放
        c_player.value = 1;
        btn_player.className = "btn_pause_css";
        music.play();
        ProgressUp();
    }

    music.addEventListener('ended',function () {
        var c_music = parseInt(document.getElementById("current_music").value);
        var length = parseInt(document.getElementById("count_music").value);
        var temp = null;
        var str = null;

        if(parseInt(c_loop.value)===0){
            str = "listshow" + c_music;
            //console.log("单曲循环:" + str);
        }else if(parseInt(c_loop.value)===1){
            temp = c_music + 1;
            if(temp === length){ temp = 0; }
            str = "listshow" + temp;
            //console.log("列表循环:" + str);
        } else{
            temp = parseInt(Math.random() * length);
            str = "listshow" + temp;
            //console.log("随机循环:" + str);
        }
        document.getElementById(str).onclick();
    })

}

//进度条自动更新 与 图像旋转
function ProgressUp(){
    var music = document.getElementById("music");
    var c_time = document.getElementById("show_current_time");
    var progress = document.getElementById('progress_play');
    var image = document.getElementById("show_img");
    var deg = document.getElementById('img_rotate');

    var current = null;
    var temp = null, min=null, sec=null;
    var c_str = null;
    var f_str = null;
    var length = null;
    var pro_width = null;

    progress_timer = setInterval(function(){
        length = music.duration;
        temp = parseInt(length);
        min = parseInt(temp / 60);
        sec = parseInt(temp % 60);
        f_str = min + ":" + sec;

        current = music.currentTime;
        pro_width = parseFloat(current/length) * 264 + "px";
        //console.log("progress width" + pro_width);
        progress.style.width = pro_width;

        temp = parseInt(current);
        min = parseInt(temp / 60);
        sec = parseInt(temp % 60);
        c_str = min + ":" + sec + " / " + f_str;
        c_time.value = c_str;

        image.style.transform="rotate("+deg.value+"deg)";
        deg.value = parseInt(deg.value) + 1;
        if(parseInt(deg.value) > 360){
            deg.value = 0;
        }
    },20);

}
function ProgressPause(){
    clearInterval(progress_timer);
}

//通过进度条控制播放进度
function ProgressContral(event) {
    var music = document.getElementById("music");
    var c_player = document.getElementById("current_player");
    var obj = document.getElementById("progress_site");
    var progress = document.getElementById('progress_play');
    var obj_left = obj.offsetLeft;
    var ex = event.clientX + document.body.scrollLeft;
    var length = ex - obj_left - 8;
    console.log("length:"+ length );        //单击的进度条相对长度

    progress.style.width = "" + length +"px";

    var count_time = music.duration;
    var current_time = count_time * length / 264;
    music.currentTime = "" + current_time +"";

    if(parseInt(c_player.value)===1){
        music.play();
    }
}

//循环方式
function ClickedLoop() {
    var c_loop = document.getElementById("current_loop");
    var music = document.getElementById("music");
    var btn_loop = document.getElementById("btn_loop");

    //alert(parseInt(c_loop.value) === 0);

    if(parseInt(c_loop.value) === 0){
        //当前为单曲循环，转为列表循环
        music.loop = false;
        c_loop.value = 1;
        btn_loop.className = "btn_loop_css";
    }else if(parseInt(c_loop.value) === 1){
        //当前为列表循环，转为随机播放
        music.loop = false;
        c_loop.value = 2;
        btn_loop.className = "btn_random_css";
    }else{
        //当前为随机播放，转为单曲循环
        music.loop = true;
        c_loop.value = 0;
        btn_loop.className = "btn_single_css";
    }
}

function ClickedPre(){
    var c_music = parseInt(document.getElementById("current_music").value);
    var length = parseInt(document.getElementById("count_music").value);

    var temp = c_music - 1;
    if(temp < 0){ temp = length - 1; }
    var str = "listshow" + temp;
    document.getElementById(str).onclick();
}

function ClickedNext() {
    var c_music = parseInt(document.getElementById("current_music").value);
    var length = parseInt(document.getElementById("count_music").value);

    var temp = c_music + 1;
    if(temp === length){ temp = 0; }
    var str = "listshow" + temp;
    document.getElementById(str).onclick();
}

//打开新的窗口进行浏览
function Browse(){
    var url = document.getElementById("enter").value;
    window.open(url, '_blank');
}

//按键测试
function ClickTest(info) {
    alert(info);
}