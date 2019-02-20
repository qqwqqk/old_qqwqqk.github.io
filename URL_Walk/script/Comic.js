window.onload = function(){

    //参数解析，数据地址拼接
    var cache = parseUrl();
    var number = parseInt(cache['id']);
    var parameter ="xmls/" + cache['name'] + cache['id'] + ".xml";
    //alert(parameter);

    UpFrame(number);
    UpSection(parameter);
}

//参数解析函数
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

//页面框架信息替换
function UpFrame(id){
    if (window.XMLHttpRequest) { xmltitle = new XMLHttpRequest(); } else { xmltitle = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmltitle.open("GET", "xmls/walk.xml", false);
    xmltitle.send();
    xmlTitle = xmltitle.responseXML;
    var sites = xmlTitle.getElementsByTagName("site_node");
    var length = sites.length;
    var title = "第" + id + "话";
    document.getElementsByTagName("title")[0].innerText = title;

    /*  添加标题信息
    var newh1 = document.createElement("h1");
    newh1.innerHTML= title ;
    document.getElementById("topic").appendChild(newh1);
    */

    if(id<5){
        for(var i=1;i<=9;i++){
            var url_pre = sites[i - 1].getElementsByTagName("URL")[0].childNodes[0].nodeValue;
            if(i==id){ AddFloatlink(url_pre,i,1);} else{ AddFloatlink(url_pre,i,0); }
        }
    }else if(length-id<5){
        for(var j=length-8 ;j<=length;j++){
            var url_next = sites[j - 1].getElementsByTagName("URL")[0].childNodes[0].nodeValue;
            if(j==id){ AddFloatlink(url_next,j,1);} else{ AddFloatlink(url_next,j,0); }
        }
    }else{
        for(var k=id-4 ;k<=id+4; k++){
            var url = sites[k - 1].getElementsByTagName("URL")[0].childNodes[0].nodeValue;
            if(k==id){ AddFloatlink(url,k,1);} else{ AddFloatlink(url,k,0); }
        }
    }
}

//浮动位置添加目录信息
function AddFloatlink(url,value,tag){
    var link = document.createElement("div");
    link.className="float_link";
    if(!tag){ link.innerHTML="<a href=\'" + url + "\' class=\'list_link\'>第"+ value +"话</a>";}
    else{ link.innerHTML="<a href=\'" + url + "\' class=\'current_link\'>第"+ value +"话</a>";}
    document.getElementById("menu").appendChild(link);
}

//文本信息更新
function UpSection(url){
    //访问文本对应的XML数据
    if (window.XMLHttpRequest) { xmlsection = new XMLHttpRequest(); } else { xmlsection = new ActiveXObject("Microsoft.XMLHTTP"); }
    xmlsection.open("GET", url, false);
    xmlsection.send();
    xmlSection = xmlsection.responseXML;
    var sites = xmlSection.getElementsByTagName("url");
    var length = sites.length;
    //alert(length);

    //将对应的文本内容写入HTML页面
    for(var i=0;i<length;i++){
        var Section= sites[i].childNodes[0].nodeValue;
        AddSection(Section);
    }
}

//文本写入函数
function AddSection(section){
    var newDiv = document.createElement("div");
    newDiv.className = "show_img_box";
    newDiv.innerHTML = "<img src=\'"+ section +"\' class=\'show_img_content\'>";
    document.getElementById("read_content").appendChild(newDiv);
}