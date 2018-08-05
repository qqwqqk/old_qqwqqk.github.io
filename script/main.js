window.onload = function(){
    document.getElementById("list_star").value = 0;
    InitLists()
}

function InitLists(){
    var list_star = document.getElementById("list_star");

    var star = list_star.value;

    var index1 = parseInt(star);
    var index2 = parseInt(star) + 1;
    var index3 = parseInt(star) + 2;
    var index4 = parseInt(star) + 3;

    alert(index2);

    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }

    xmlhttp.open("GET", "database/site_lists.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

    var sites = xmlDoc.getElementsByTagName("site_node");

    document.getElementById("show_list_header1").value = sites[index1].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_header2").value = sites[index2].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_header3").value = sites[index3].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("show_list_header4").value = sites[index4].getElementsByTagName("name")[0].childNodes[0].nodeValue;
}

function MoveLeft(){
    alert("left_move");
}

function MoveRight() {
    alert("right_move");
}