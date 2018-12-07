window.onload = function(){
    var length = document.getElementById("list_length");

    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlhttp.open("GET", "xmls/alchemy.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("site_node");

    document.getElementById('choice_value').value = 1 ;     //默认选择为1

    //初始的一些设置
    document.getElementById('title').value = sites[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_role").style.backgroundColor =  sites[0].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_role").src =  sites[0].getElementsByTagName("role")[0].childNodes[0].nodeValue;
    document.getElementById("show_doll").src =  sites[0].getElementsByTagName("doll")[0].childNodes[0].nodeValue;
    document.getElementById("show_plot").src =  sites[0].getElementsByTagName("plot")[0].childNodes[0].nodeValue;
    document.getElementById('Introduction').innerHTML = sites[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;

    //alert(sites[0].getElementsByTagName("description")[0].childNodes[0].nodeValue);

    length.value = sites.length;
    InitLists(0 , length.value );
    ChoiceShow();
}

function InitLists( list_star ,list_length){
    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlhttp.open("GET", "xmls/alchemy.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("site_node");

    var star = parseInt(list_star);
    var length = parseInt(list_length);

    document.getElementById("list_star").value = star;

    var index0 = star;
    var index1 = (star + 1) % length;
    var index2 = (star + 2) % length;
    var index3 = (star + 3) % length;
    var index4 = (star + 4) % length;
    var index5 = (star + 5) % length;
    var index6 = (star + 6) % length;
    var index7 = (star + 7) % length;
    var index8 = (star + 8) % length;

    //设置图片背景
    document.getElementById("show_list_image0").style.backgroundColor = sites[index0].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image1").style.backgroundColor = sites[index1].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image2").style.backgroundColor = sites[index2].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image3").style.backgroundColor = sites[index3].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image4").style.backgroundColor = sites[index4].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image5").style.backgroundColor = sites[index5].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image6").style.backgroundColor = sites[index6].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image7").style.backgroundColor = sites[index7].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image8").style.backgroundColor = sites[index8].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    //设置图片内容
    document.getElementById("show_list_image0").src = sites[index0].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image1").src = sites[index1].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image2").src = sites[index2].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image3").src = sites[index3].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image4").src = sites[index4].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image5").src = sites[index5].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image6").src = sites[index6].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image7").src = sites[index7].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_image8").src = sites[index8].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
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
function SiteShow(number){
    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlhttp.open("GET", "xmls/alchemy.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("site_node");

    document.getElementById('title').value = sites[number].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_role").style.backgroundColor =  sites[number].getElementsByTagName("color")[0].childNodes[0].nodeValue;
    document.getElementById("show_role").src =  sites[number].getElementsByTagName("role")[0].childNodes[0].nodeValue;
    document.getElementById("show_doll").src =  sites[number].getElementsByTagName("doll")[0].childNodes[0].nodeValue;
    document.getElementById("show_plot").src =  sites[number].getElementsByTagName("plot")[0].childNodes[0].nodeValue;
    document.getElementById('Introduction').innerHTML = sites[number].getElementsByTagName("description")[0].childNodes[0].nodeValue;
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

//菜单选项平行左移
function MoveLeft(){
    var list_star = document.getElementById("list_star");
    var list_length = document.getElementById("list_length");
    var star = parseInt(list_star.value) - 1;
    var length = parseInt(list_length.value);

    if(star < 0){ star = star + length; }
    InitLists(star,length);
    document.getElementById("list_star").value = star;
}

//菜单选项平行右移
function MoveRight() {
    var list_star = document.getElementById("list_star");
    var list_length = document.getElementById("list_length");
    var star = parseInt(list_star.value) + 1;
    var length = parseInt(list_length.value);

    if(star >= length){ star = star - length; }
    InitLists(star,length);
    document.getElementById("list_star").value = star;
}

//单击列表选项框
function Clicked0(){
    var star = document.getElementById("list_star").value;
    var site = parseInt(star);
    SiteShow(site);
}
function Clicked1(){
    var star = document.getElementById("list_star").value;
    var length = document.getElementById("list_length").value;
    var site = (parseInt(star) + 1) % parseInt(length);
    SiteShow(site);
}
function Clicked2(){
    var star = document.getElementById("list_star").value;
    var length = document.getElementById("list_length").value;
    var site = (parseInt(star) + 2) % parseInt(length);
    SiteShow(site);
}
function Clicked3(){
    var star = document.getElementById("list_star").value;
    var length = document.getElementById("list_length").value;
    var site = (parseInt(star) + 3) % parseInt(length);
    SiteShow(site);
}
function Clicked4(){
    var star = document.getElementById("list_star").value;
    var length = document.getElementById("list_length").value;
    var site = (parseInt(star) + 4) % parseInt(length);
    SiteShow(site);
}
function Clicked5(){
    var star = document.getElementById("list_star").value;
    var length = document.getElementById("list_length").value;
    var site = (parseInt(star) + 5) % parseInt(length);
    SiteShow(site);
}
function Clicked6(){
    var star = document.getElementById("list_star").value;
    var length = document.getElementById("list_length").value;
    var site = (parseInt(star) + 6) % parseInt(length);
    SiteShow(site);
}
function Clicked7(){
    var star = document.getElementById("list_star").value;
    var length = document.getElementById("list_length").value;
    var site = (parseInt(star) + 7) % parseInt(length);
    SiteShow(site);
}
function Clicked8(){
    var star = document.getElementById("list_star").value;
    var length = document.getElementById("list_length").value;
    var site = (parseInt(star) + 8) % parseInt(length);
    SiteShow(site);
}

//打开新的窗口进行浏览
function Browse(){
    var url = document.getElementById("enter").value;
    window.open(url, '_blank');
}