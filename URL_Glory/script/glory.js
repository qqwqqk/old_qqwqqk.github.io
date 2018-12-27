window.onload = function(){
    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlhttp.open("GET", "xmls/glory.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var sites = xmlDoc.getElementsByTagName("site_node");

    var length = sites.length;
    //alert(length);

    for(var i=0;i<length;i++){
        var volume= sites[i].getElementsByTagName("volume")[0].childNodes[0].nodeValue;
        var title = sites[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var url= sites[i].getElementsByTagName("URL")[0].childNodes[0].nodeValue;

        AddListnode(volume,title,url);
    }

}

function AddListnode(volume,title,url) {
    var newDiv = document.createElement("div");
    newDiv.className="list_title";
    newDiv.innerHTML="<a href=\'" + url + "\' class=\'list_link\' target=\'_blank\'>第"+ volume +"节   "+ title +"</a>";
    document.getElementById("list").appendChild(newDiv);
}