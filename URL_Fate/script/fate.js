window.onload = function(){
    var star = document.getElementById("list_star");
    var length = document.getElementById("list_length");
    star.value = 0;
    length.value = InitListFull(4).value;
    ClickedList(0);
}

//页面初始设置
function InitListFull(list_count){
    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlhttp.open("GET", "xmls/fate.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("node");

    //AddMove(0);
    for(var i=0; i<list_count; i++){
        var id = i;
        var number = sites[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        var type = sites[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
        var title = sites[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        var url = sites[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        var img = sites[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
        AddLists(id, number, type, title, url, img, 1);
    }
    for(var j=list_count; j<sites.length; j++){
        var p_id = j;
        var p_number = sites[j].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        var p_type = sites[j].getElementsByTagName("type")[0].childNodes[0].nodeValue;
        var p_title = sites[j].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        var p_url = sites[j].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        var p_img = sites[j].getElementsByTagName("image")[0].childNodes[0].nodeValue;
        AddLists(p_id, p_number, p_type, p_title, p_url, p_img, 0);
    }
    for(var k=0; k<list_count - 1; k++){
        var pr_id = k + sites.length;
        var pr_number = sites[k].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        var pr_type = sites[k].getElementsByTagName("type")[0].childNodes[0].nodeValue;
        var pr_title = sites[k].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        var pr_url = sites[k].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        var pr_img = sites[k].getElementsByTagName("image")[0].childNodes[0].nodeValue;
        AddLists(pr_id,pr_number, pr_type, pr_title, pr_url, pr_img, 0);
    }

    var count = new Object();
    count.value = sites.length;
    return count;
}

function AddLists(id, num, type, title, url, img, show){
    var newDiv = document.createElement("div");
    var str = 'listshow' + id;
    newDiv.id = str;
    newDiv.className = "show_list_box";
    newDiv.innerHTML="<img id=\'listimg" + id +"\' title=\'"+ title +"\' alt=\'" + url + "\' src=\'"+ img +"\' class=\'show_list_content\' onclick=\'ClickedList("+ id +")\'><input id=\'listname" + id + "\' class=\'show_list_header\' value=\'"+ title +"\' readonly>";
    document.getElementById("list_td").appendChild(newDiv);
    if(!show){ document.getElementById(str).style.display = "none"; }
}

//video选项参数
var options = {
    controls: true,
    autoplay: false,
    preload: "auto",
    loop: false,

    controlBar: {
        CaptionsButton: false,
        ChaptersButton: false,
        PlaybackRateMenuButton: false,
        LiveDisplay: false,
        SubtitlesButton: false,
        RemainingTimeDisplay: false,
        ProgressControl: false,
        VolumeMenuButton: {
            inline: false,
            vertical: true
        },
        FullscreenToggle: false
    }
};

function ClickedList(id){
    var list_length = document.getElementById("list_length");
    var length = parseInt(list_length.value);
    var list_index = parseInt(id);
    if(list_index >= length){list_index = list_index - length};

    var index = 'listimg' + list_index;
    var info = document.getElementById(index);
    document.getElementById('show_name').value = info.title;

    var player = videojs('media',options);
    player.src(info.alt);

    var str = info.src;
    var src = str.replace(/_s.jpg/, "_p.jpg");
    player.poster(src);
    player.load();
}

//菜单选项平行右移
function MoveRight(){
    var list_star = document.getElementById("list_star");
    var list_length = document.getElementById("list_length");
    var star = parseInt(list_star.value) + 1;
    var length = parseInt(list_length.value);

    if(star >= length){
        for(var i = parseInt(list_star.value); i<length+3; i++){
            var str1 = 'listshow' + i;
            document.getElementById(str1).style.display = "none";
        }
        star = star - length;
        for(var j = star; j<4;j++){
            var str2 = 'listshow' + j;
            document.getElementById(str2).style.display = "block";
        }
    }
    else{
        var str3 = 'listshow' + parseInt(list_star.value);
        document.getElementById(str3).style.display = "none";
        var cache = parseInt(list_star.value) + 4;
        var str4 = 'listshow' + cache;
        document.getElementById(str4).style.display = "block";
    }
    document.getElementById("list_star").value = star;
}

//菜单选项平行左移
function MoveLeft() {
    var list_star = document.getElementById("list_star");
    var list_length = document.getElementById("list_length");
    var star = parseInt(list_star.value) - 1;
    var length = parseInt(list_length.value);

    if(star < 0){
        for(var i = 0; i<4; i++){
            var str1 = 'listshow' + i;
            document.getElementById(str1).style.display = "none";
        }
        star = star + length;
        for(var j = star; j<length+3; j++){
            var str2 = 'listshow' + j;
            document.getElementById(str2).style.display = "block";
        }
    }
    else{
        var cache = parseInt(list_star.value) + 3;
        var str3 = 'listshow' + cache;
        document.getElementById(str3).style.display = "none";
        var str4 = 'listshow' + star;
        document.getElementById(str4).style.display = "block";
    }
    document.getElementById("list_star").value = star;
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