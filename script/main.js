window.onload = function(){
    var length = document.getElementById("list_length");

    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlhttp.open("GET", "database/site_lists.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("site_node");

    //初始的一些设置
    document.getElementById('enter').value = sites[0].getElementsByTagName("url")[0].childNodes[0].nodeValue;
    document.getElementById("site_show").src =  sites[0].getElementsByTagName("url")[0].childNodes[0].nodeValue;
    document.getElementById('abstract').innerHTML = sites[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;

    length.value = sites.length;
    InitLists(0 , length.value );
}

function InitLists( list_star ,list_length){
    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlhttp.open("GET", "database/site_lists.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("site_node");

    var star = parseInt(list_star);
    var length = parseInt(list_length);

    document.getElementById("list_star").value = star;

    var index1 = star;
    var index2 = (star + 1) % length;
    var index3 = (star + 2) % length;
    var index4 = (star + 3) % length;

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
    var list_length = document.getElementById("list_length");
    var star = parseInt(list_star.value) - 1;
    var length = parseInt(list_length.value);

    if(star < 0){ star = star + length; }
    InitLists(star,length);
    document.getElementById("list_star").value = star;
}

function MoveRight() {
    var list_star = document.getElementById("list_star");
    var list_length = document.getElementById("list_length");
    var star = parseInt(list_star.value) + 1;
    var length = parseInt(list_length.value);

    if(star >= length){ star = star - length; }
    InitLists(star,length);
    document.getElementById("list_star").value = star;
}
function Clicked1(){
    var info = document.getElementById("show_list_content1");
    document.getElementById('abstract').innerHTML = info.title;
    document.getElementById('enter').value = info.href;
}
function Clicked2(){
    var info = document.getElementById("show_list_content2");
    document.getElementById('abstract').innerHTML = info.title;
    document.getElementById('enter').value = info.href;
}
function Clicked3(){
    var info = document.getElementById("show_list_content3");
    document.getElementById('abstract').innerHTML = info.title;
    document.getElementById('enter').value = info.href;
}
function Clicked4(){
    var info = document.getElementById("show_list_content4");
    document.getElementById('abstract').innerHTML = info.title;
    document.getElementById('enter').value = info.href;
}

function Browse(){
    var url = document.getElementById("enter").value;
    window.open(url, '_blank');
}