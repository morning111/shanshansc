function ajaxGet(url,fn,data){
	if(data){ //可选参数;
		url = url + "?" + data; 
	}
	console.log(url);

	var ajax = new XMLHttpRequest();
	ajax.open("GET",url,true);
	ajax.send(null);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			fn(ajax.responseText)
		}			
	}
}
	
function ajaxPost(url,callback,data){
	var ajax = new XMLHttpRequest();
	ajax.open("POST",url,true);
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send(data);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			//执行回调函数;
			callback(ajax.responseText);
		}
	}
}

	

//重点记忆的; => 加分项;
function InitAjax() //初始化ajax; => ajax 的兼容;
{
	var ajax=false;
	try
	{
		ajax = new ActiveXObject("Msxml2.XMLHTTP"); 
	}
	catch (e)
	{	
		// 不支持 MSXML2版本的ActiveX 
		
		try
		{
			ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch (E)
		{
			// 不支持 Microsoft.XMLHTTP 
			ajax = false;
		}
	}

	if (!ajax && typeof XMLHttpRequest!='undefined')
	{
		ajax = new XMLHttpRequest();
	}
	return ajax;
}

// cookie
// 创建、修改、删除cookie
function setCookie(_name, _value, _date){
	// 设置的值，无论是什么类型的数据，都给他转为json对象
	var json = {
		"value":_value
	}	
	var str = JSON.stringify(json);	// 将json对象转为字符串  '{"value":_value}'
	str = encodeURIComponent(str);	// 编码，解决中文乱码
	// 设置cookie
	if( _date ){
		var dt = new Date();
		dt.setDate( dt.getDate()+_date );
		document.cookie = _name+"="+str+";expires="+dt.toGMTString()+";path=/";
	}else{
		document.cookie = _name+"="+str+";path=/";
	}
}

function addCookie(_name, _value, _date){
	setCookie(_name, _value, _date);
}

// 根据cookie名称，删除该cookie
function removeCookie(_name){
	setCookie(_name, "", -1);
}

// 根据cookie名称，获取该cookie的内容
function getCookie(_name){
	var str = document.cookie;
	// str = "b={"value":_value}; bc=1; ac=1; dc=1; c=1";
	var arr = str.split("; ");
	// arr = ["b={"value":_value}", "bc=1", "ac=1", "dc=1", "c=1"];
	for(var i=0,l=arr.length; i<l; i++){
		var tmp = arr[i];	// "b={"value":_value}"
		var col = tmp.split("=");	// ["b", "{"value":_value}"]
		// if ( "b" == "b" )
		if( _name == col[0] ){//如果找到了cookie，则跳出函数，并将其结果返回	
			var decode = decodeURIComponent( col[1] );	//解码 "{"value":_value}"
			var obj = JSON.parse( decode );//将字符串转换为json对象
			return obj.value;
		}
	}
	return "";	// 如果没有这一行，如果找不到cookie，则返回undefined
}

