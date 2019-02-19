window.onload = function(){
    var star = document.getElementById("list_star");
    var length = document.getElementById("list_length");
    star.value = 0;
    length.value = InitListFull(9).value;
    ClickedList(0);
    Choice1();
}

//页面初始设置
function InitListFull(list_count){
    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlhttp.open("GET",  "xmls/alchemy.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("site_node");

    for(var i=0; i<list_count; i++){
        var id = i;
        var name = sites[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var color = sites[i].getElementsByTagName("color")[0].childNodes[0].nodeValue;
        var img = sites[i].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
        var text = sites[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        AddLists(id, name, color, img, text, 1);
    }
    for(var j=list_count; j<sites.length; j++){
        var p_id = j;
        var p_name = sites[j].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var p_color = sites[j].getElementsByTagName("color")[0].childNodes[0].nodeValue;
        var p_img = sites[j].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
        var p_text = sites[j].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        AddLists(p_id, p_name, p_color, p_img, p_text, 0);
    }
    for(var k=0; k<list_count - 1; k++){
        var pr_id = k + sites.length;
        var pr_name = sites[k].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var pr_color = sites[k].getElementsByTagName("color")[0].childNodes[0].nodeValue;
        var pr_img = sites[k].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
        var pr_text = sites[k].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        AddLists(pr_id, pr_name, pr_color, pr_img, pr_text, 0);
    }

    var count = new Object();
    count.value = sites.length;
    return count;
}
//添加图标列表
function AddLists(id, name, color, img, text, show){
    var newDiv = document.createElement("div");
    var str = 'listshow' + id;
    newDiv.id = str;
    newDiv.className = "show_list_box";
    newDiv.innerHTML="<img id=\'listimg" + id +"\' title=\'"+ name +"\' src=\'"+ img +"\' alt=\'"+ text +"\' style=\'background-color:"+ color +" \' class=\'show_list_content\' onclick=\'ClickedList("+ id +")\'>";
    document.getElementById("list_td").appendChild(newDiv);
    if(!show){ document.getElementById(str).style.display = "none"; }
}
//菜单选项平行右移
function MoveRight(){
    var list_star = document.getElementById("list_star");
    var list_length = document.getElementById("list_length");
    var star = parseInt(list_star.value) + 1;
    var length = parseInt(list_length.value);

    if(star >= length){
        for(var i = parseInt(list_star.value); i<length+8; i++){
            var str1 = 'listshow' + i;
            document.getElementById(str1).style.display = "none";
        }
        star = star - length;
        for(var j = star; j<9;j++){
            var str2 = 'listshow' + j;
            document.getElementById(str2).style.display = "block";
        }
    }
    else{
        var str3 = 'listshow' + parseInt(list_star.value);
        document.getElementById(str3).style.display = "none";
        var cache = parseInt(list_star.value) + 9;
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
        for(var i = 0; i<9; i++){
            var str1 = 'listshow' + i;
            document.getElementById(str1).style.display = "none";
        }
        star = star + length;
        for(var j = star; j<length+8; j++){
            var str2 = 'listshow' + j;
            document.getElementById(str2).style.display = "block";
        }
    }
    else{
        var cache = parseInt(list_star.value) + 8;
        var str3 = 'listshow' + cache;
        document.getElementById(str3).style.display = "none";
        var str4 = 'listshow' + star;
        document.getElementById(str4).style.display = "block";
    }
    document.getElementById("list_star").value = star;
}
//单击图标列表响应函数
function ClickedList(id){
    var list_length = document.getElementById("list_length");
    var length = parseInt(list_length.value);
    var list_index = parseInt(id);
    if(list_index >= length){list_index = list_index - length};

    var index = 'listimg' + list_index;
    var info = document.getElementById(index);
    document.getElementById('title').value = info.title;
    document.getElementById("show_role").style.backgroundColor =  info.style.backgroundColor;
    document.getElementById('Introduction').innerHTML = info.alt;

    var str = info.src;
    var role_src = str.replace(/icon/g, "role");
    var doll_src = str.replace(/icon/g, "doll");
    var plot_src = str.replace(/icon/g, "plot");
    document.getElementById("show_role").src = role_src;
    document.getElementById("show_doll").src = doll_src;
    document.getElementById("show_plot").src = plot_src;
}

function ChoiceShow(){
    var cache = document.getElementById("choice_value");
    var choice = parseInt(cache.value);

    if (choice == 1) {
        document.getElementById('site_show1').style.display = "block";
        document.getElementById('site_show2').style.display = "none";
        document.getElementById('site_show3').style.display = "none";
    }
    if(choice == 2){
        document.getElementById('site_show1').style.display = "none";
        document.getElementById('site_show2').style.display = "block";
        document.getElementById('site_show3').style.display = "none";
    }
    if(choice == 3){
        document.getElementById('site_show1').style.display = "none";
        document.getElementById('site_show2').style.display = "none";
        document.getElementById('site_show3').style.display = "block";
    }
}
function Choice1() {
    document.getElementById('choice_value').value = 1 ;
    ChoiceShow();
    return 0;
}
function Choice2() {
    document.getElementById('choice_value').value = 2 ;
    ChoiceShow();
    return 0;
}
function Choice3() {
    document.getElementById('choice_value').value = 3 ;
    ChoiceShow();
    return 0;
}

//打开新的窗口进行浏览
function Browse(){
    var url = document.getElementById("enter").value;
    window.open(url, '_blank');
}