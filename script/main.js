window.onload = function(){ InitLists(0); }

function InitLists( list_star ){
    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlhttp.open("GET", "database/site_lists.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("site_node");

    var star = parseInt(list_star);
    var length = sites.length;

    if(star < 0 ){ star = star + length; }
    if(star >= length){ star = star - length; }

    document.getElementById("list_star").value = star;

    var index1 = star;
    var index2 = (star + 1) % length;
    var index3 = (star + 2) % length;
    var index4 = (star + 3) % length;

    //设置框架展示内容
    document.getElementById("site_show").src =  sites[star].getElementsByTagName("url")[0].childNodes[0].nodeValue;

    //绑定标题文字
    document.getElementById("show_list_header1").value = sites[index1].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_header2").value = sites[index2].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_header3").value = sites[index3].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_header4").value = sites[index4].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    //设置超连接文本
    document.getElementById("show_list_content1").title = sites[index1].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_content2").title = sites[index2].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_content3").title = sites[index3].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_content4").title = sites[index4].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    //设置超连接
    document.getElementById("show_list_content1").href = sites[index1].getElementsByTagName("url")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_content2").href = sites[index2].getElementsByTagName("url")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_content3").href = sites[index3].getElementsByTagName("url")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_content4").href = sites[index4].getElementsByTagName("url")[0].childNodes[0].nodeValue;
    //设置图片背景
    document.getElementById("show_list_image1").style.backgroundColor = sites[index1].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image2").style.backgroundColor = sites[index2].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image3").style.backgroundColor = sites[index3].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image4").style.backgroundColor = sites[index4].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    //设置图片内容
    document.getElementById("show_list_image1").src = sites[index1].getElementsByTagName("image")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image2").src = sites[index2].getElementsByTagName("image")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image3").src = sites[index3].getElementsByTagName("image")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image4").src = sites[index4].getElementsByTagName("image")[0].childNodes[0].nodeValue;


}

function MoveLeft(){
    var list_star = document.getElementById("list_star");
    var star = parseInt(list_star.value);
    InitLists(star - 1);
    document.getElementById("list_star").value = star - 1;
    return false;
}

function MoveRight() {
    var list_star = document.getElementById("list_star");
    var star = parseInt(list_star.value);
    InitLists(star + 1);
    document.getElementById("list_star").value = star + 1;
    return false;
}