window.onload = function(){
    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlhttp.open("GET", "xmls/walk.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("site_node");

    var length = sites.length;
    //alert(length);

    for(var i=0;i<length;i++){
        var volume= sites[i].getElementsByTagName("number")[0].childNodes[0].nodeValue;
        var url= sites[i].getElementsByTagName("URL")[0].childNodes[0].nodeValue;

        AddListnode(volume,url);
    }

}

function AddListnode(volume,url) {
    var newDiv = document.createElement("div");
    newDiv.className="list_title";
    newDiv.innerHTML="<a href=\'" + url + "\' class=\'list_link\' target=\'_blank\'>第"+ volume +"话</a>";
    document.getElementById("list").appendChild(newDiv);
}