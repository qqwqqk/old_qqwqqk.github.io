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
    xmlhttp.open("GET", "database/site_lists.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("site_node");

    //AddMove(0);
    for(var i=0; i<list_count; i++){
        var id = i;
        var name = sites[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var color = sites[i].getElementsByTagName("color")[0].childNodes[0].nodeValue;
        var img = sites[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
        var img_show = sites[i].getElementsByTagName("image_show")[0].childNodes[0].nodeValue;
        var img_list = sites[i].getElementsByTagName("image_list")[0].childNodes[0].nodeValue;
        var text = sites[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        var url = sites[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        AddLists(id, name, color, img, img_show, img_list, text, url, 1);
    }
    for(var j=list_count; j<sites.length; j++){
        var p_id = j;
        var p_name = sites[j].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var p_color = sites[j].getElementsByTagName("color")[0].childNodes[0].nodeValue;
        var p_img = sites[j].getElementsByTagName("image")[0].childNodes[0].nodeValue;
        var p_img_show = sites[j].getElementsByTagName("image_show")[0].childNodes[0].nodeValue;
        var p_img_list = sites[j].getElementsByTagName("image_list")[0].childNodes[0].nodeValue;
        var p_text = sites[j].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        var p_url = sites[j].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        AddLists(p_id, p_name, p_color, p_img, p_img_show, p_img_list, p_text, p_url, 0);
    }
    for(var k=0; k<list_count - 1; k++){
        var pr_id = k + sites.length;
        var pr_name = sites[k].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var pr_color = sites[k].getElementsByTagName("color")[0].childNodes[0].nodeValue;
        var pr_img = sites[k].getElementsByTagName("image")[0].childNodes[0].nodeValue;
        var pr_img_show = sites[k].getElementsByTagName("image_show")[0].childNodes[0].nodeValue;
        var pr_img_list = sites[k].getElementsByTagName("image_list")[0].childNodes[0].nodeValue;
        var pr_text = sites[k].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        var pr_url = sites[k].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        AddLists(pr_id, pr_name, pr_color, pr_img, pr_img_show, pr_img_list, pr_text, pr_url, 0);
    }
    //AddMove(1);

    var count = new Object();
    count.value = sites.length;
    return count;
}

function AddMove(tag){
    var newDiv = document.createElement("td");
    if(!tag){
        newDiv.innerHTML="<button type=\'button\' class=\'move_left\' onclick=\'MoveLeft()\'></button>"
    }
    else{
        newDiv.innerHTML="<button type=\'button\' class=\'move_right\' onclick=\'MoveRight()\'></button>"
    }
    document.getElementById("tr").appendChild(newDiv);
}

function AddLists(id, name, color, img, img_show, img_list, text, url, show){
    var newDiv = document.createElement("div");
    var str = 'listshow' + id;
    newDiv.id = str;
    newDiv.className = "show_list_box";
    newDiv.innerHTML="<img id=\'listimg" + id +"\' title=\'"+ text +"\' src=\'"+ img_list +"\' alt=\'"+ url +"\' class=\'show_list_content\' onclick=\'ClickedList("+ id +")\'> <input class=\'show_list_header\' value=\'"+ name +"\' readonly>";
    document.getElementById("list_td").appendChild(newDiv);
    if(!show){ document.getElementById(str).style.display = "none"; }
}

function ClickedList(id){
    var list_length = document.getElementById("list_length");
    var length = parseInt(list_length.value);
    var list_index = parseInt(id);
    if(list_index >= length){list_index = list_index - length};

    var index = 'listimg' + list_index;
    var info = document.getElementById(index);
    document.getElementById('site_show_link').href = info.alt;
    document.getElementById('site_show_image').title = info.title;

    var str = info.src;
    var src = str.replace(/_list.jpg/, "_show.jpg");
    document.getElementById("site_show_image").src =  src;
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