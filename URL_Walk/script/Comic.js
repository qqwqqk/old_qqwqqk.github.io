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
    var newh1 = document.createElement("h1");
    newh1.innerHTML= title ;
    document.getElementById("topic").appendChild(newh1);

    if(id>1){
        var pre_value = id - 1;
        var pre_url= sites[pre_value - 1].getElementsByTagName("URL")[0].childNodes[0].nodeValue;

        AddHeaderlink(pre_url,pre_value,0);
        AddFooterlink(pre_url,pre_value,0);
    }

    if(id<length){
        var next_value = id + 1;
        var next_url= sites[next_value - 1].getElementsByTagName("URL")[0].childNodes[0].nodeValue;

        AddHeaderlink(next_url,next_value,1);
        AddFooterlink(next_url,next_value,1);
    }
}

//头部位置添加超连接
function AddHeaderlink(url,value,tag) {
    var link = document.createElement("div");
    link.innerHTML="<a href=\'" + url + "\' class=\'list_link\'>第"+ value +"话</a>";
    if(!tag){ link.className="pre_link";} else{ link.className="next_link";}
    document.getElementById("header_link").appendChild(link);
}

//底部位置添加超连接
function AddFooterlink(url,value,tag) {
    var link = document.createElement("div");
    link.innerHTML="<a href=\'" + url + "\' class=\'list_link\'>第"+ value +"话</a>";
    if(!tag){ link.className="pre_link";} else{ link.className="next_link";}
    document.getElementById("footer_link").appendChild(link);
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
    var newDiv = document.createElement("p");
    newDiv.innerHTML=section;
    document.getElementById("read_content").appendChild(newDiv);
}