window.onload = function(){
    var list_first = document.getElementById("list_first");
    var list_last = document.getElementById("list_last");

    list_first.value = 1;
    list_last.value = 4;

    if (window.XMLHttpRequest) {xmlhttp = new XMLHttpRequest();} else {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}

    xmlhttp.open("GET","database/site_lists.xml",false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

    var sites = xmlDoc.getElementsByTagName("site_node");

    document.getElementById("show_list_header1").value = sites[1].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_header2").value = sites[2].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_header3").value = sites[3].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_header4").value = sites[4].getElementsByTagName("name")[0].childNodes[0].nodeValue;
}

function MoveLeft(){
    alert("left_move");
}

function MoveRight() {
    alert("right_move");
}