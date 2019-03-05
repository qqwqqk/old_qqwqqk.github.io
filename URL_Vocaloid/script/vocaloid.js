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

function ClickedList(id, name, icon, img, url){
    var c_player = document.getElementById("current_player");
    var c_music = document.getElementById("current_music");

    c_player.value = 0;

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