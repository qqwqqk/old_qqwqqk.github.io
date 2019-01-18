window.onload = function(){

    var v = parseUrl();//解析所有参数
    alert(v['name']);//就是你要的结果

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

        //AddListnode(volume,title,url);
    }

}

function parseUrl(){
    var url=location.href;
    var i=url.indexOf('?');
    if(i==-1)return;
    var querystr = url.substr(i+1);
    var arr1 = querystr.split(';');
    var arr2 = new Object();
    for  (i in arr1){
        var ta = arr1[i].split('=');
        arr2[ta[0]]=ta[1];
    }
    return arr2;
}

function AddListnode(volume,title,url) {
    var newDiv = document.createElement("div");
    newDiv.className="list_title";
    newDiv.innerHTML="<a href=\'" + url + "\' class=\'list_link\' target=\'_blank\'>第"+ volume +"节   "+ title +"</a>";
    document.getElementById("list").appendChild(newDiv);
}