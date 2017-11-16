$(function(){


$("#footer").load("footer.html");
$("#header").load("header.html");
$("#rightButton").load("rightButton.html");


var str = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
var res="";
for(var i = 0 ; i < 4 ; i++){
	if(i % 2 == 0){
		res += str[Math.round(Math.random()*9)];
	}else{
		res += str[Math.round(Math.random()*52)];
	}
}
var oPicture=$("#picture")
oPicture.css({
	background:ranC(),
	color:ranC()
})

oPicture.html(res) 
$("#yanzheng-1").click(function(){
	
	var str = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
	var res="";
	for(var i = 0 ; i < 4 ; i++){
		if(i % 2 == 0){
			res += str[Math.round(Math.random()*9)];
		}else{
			res += str[Math.round(Math.random()*52)];
		}
	}
	var oPicture=$("#picture")
	oPicture.css({
		background:ranC(),
		color:ranC()
	})

	oPicture.html(res) 
})

// 随机颜色
function ranC(){
	var str = "0123456789ABCDEF" ;
	var res = "#" ;
	for(var j = 0 ; j < 6 ; j++){
		res += str[Math.round(Math.random()*16)];
	}
	return res ;
}

var email=/^\w+@\w+(\.\w+)+$/;
var phone=/^13\d{9}$/;
var user=/^[a-zA-Z_]\w{5,14}$/;
var pass= /^[a-zA-Z]\w{5,17}$/ ;

$("#btn").click(function(){

		if($("#name").val().match(email)||$("#name").val().match(phone)||$("#name").val().match(user)&&$("#pwd").val().match(pass)&&$("#repwd").val()==$("#pwd").val()&&  $("#verifyCode").val().toLowerCase()==$("#picture").html().toLowerCase()){
		setCookie("password",$("#pwd").val())
		console.log(getCookie("password"))
			setCookie("username",$("#name").val())
			
		console.log(getCookie("username"))
		window.location.href="../html/login.html";
			
		}else{
			$("#tip4").html("账户错误或密码不一致，请重新输入");
		}
	})


$("#name").focus(function(){
	   /*oTip1.style.display = "block";		
		oTip1.style.background="#E2ADAB";
		oName.style.borderColor = "#DD1F1F";*/
		$("#tip1").css({
			display:"block",
			background:"#E2ADAB"
		}),
		$("#name").css({
			borderColor:"#DD1F1F"
		});
})

$("#name").blur(function(){
if($("#name").val().match(email)||$("#name").val().match(phone)||$("#name").val().match(phone)){
console.log($(this).val())
//正确
$("#tip1").html("输入正确");
$("#tip1").css({
	display:"none"
})
}else{	
	//错误
	/*oTip1.innerHTML = "输入不能为空,请重新输入";*/
   $("#tip1").html("输入格式错误,请重新输入");
}

$("#pwd").focus(function(){
	/*oTip2.style.display = "block";
	oPwd.style.borderColor = "#DD1F1F";
	oTip2.style.background="#E2ADAB";*/
	$("#tip2").css({
			display:"block",
			background:"#E2ADAB"
		}),
		$("#pwd").css({
			borderColor:"#DD1F1F"
		});
})

$("#pwd").blur(function(){
	if($("#pwd").val().match(pass)){
	//正确
	console.log($(this).val())
	/*oTip2.innerHTML = "输入合法";
	oTip2.style.display = "none";*/
	$("#tip2").html("输入正确");
    $("#tip2").css({
	display:"none"
})
	}else{
		//错误
		/*oTip2.innerHTML = "输入不合法，请重新输入密码";*/
		$("#tip2").html("密码输入格式错误，请重新输入");
	}
})

$("#repwd").focus(function(){
	/*oTip3.style.display = "block";
	oRepwd.style.borderColor = "#DD1F1F";
	oTip3.style.background="#E2ADAB";*/
	$("#tip3").css({
			display:"block",
			background:"#E2ADAB"
		}),
		$("#pwd").css({
			borderColor:"#DD1F1F"
		});
})

$("#repwd").blur(function(){
	if($("#repwd").val()==$("#pwd").val()){
		//正确
		console.log($(this).val())
		/*oTip3.innerHTML = "输入正确";
		oTip3.style.display = "none";*/
		$("#tip3").html("输入正确");
    	$("#tip3").css({
			display:"none"
		})
	}else{
		//错误
		/*oTip3.innerHTML = "密码输入错误请重新输入";*/
		$("#tip3").html("密码输入错误，请重新输入");
		
	}
})
$("#verifyCode").blur(function(){
	if($("#verifyCode").val().toLowerCase()==$("#picture").html().toLowerCase()){
		console.log($(this).val())

	}else{
		$("#tip4").html("验证码输入错误，请重新输入");
	}
})
	

})

})


$(".logo").click(function(){
	window.location.href = "../html/index.html";
})
	

