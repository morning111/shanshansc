$(function(){
$("#footer").load("footer.html");
$("#header").load("header.html");
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
oPicture.html(res); 
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
var phone=/^13|15|17|18\d{9}$/;
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
		$("#tip1").css({
			display:"block",
			background:"#E2ADAB"
		}),
		$("#name").css({
			borderColor:"#DD1F1F"
		});
})
var flagName = null;
$("#name").blur(function(){
   if($("#name").val().match(email)||$("#name").val().match(phone)||$("#name").val().match(user)){
	console.log($(this).val())
	    //用户名是否已存在
		var name=getCookie("username");
		var arr = name.split("; ");
		var tname = "";
		for(var i=0;i<arr.length;i++){
			var info = arr[i].split("=");
			if(info[0] == name){
				tname = info[1];
			}
		}
		if($("#name").val()==name){
			//正确
			console.log($(this).val())
			flagName = false;
			$("#tip1").html("用户名已存在，请重新输入");		
		}
		else{//正确
			flagName = true;
			$("#tip1").html("输入正确");
			$("#tip1").css({
				display:"none"
			})
		}	
	}else{	
		//错误
		/*oTip1.innerHTML = "输入不能为空,请重新输入";*/
		flagName = false;
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
flagName = null
$("#pwd").blur(function(){
	if($("#pwd").val().match(pass)){
	//正确
	flagPwd = true;
	/*oTip2.innerHTML = "输入合法";
	oTip2.style.display = "none";*/
	$("#tip2").html("输入正确");
    $("#tip2").css({
	display:"none"
})
	}else{
		//错误
		/*oTip2.innerHTML = "输入不合法，请重新输入密码";*/
		flagPwd = false;
		$("#tip2").html("密码输入格式错误，请重新输入");
	}
	
})

$("#repwd").focus(function(){
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
	window.location.href = "../index.html";
})
	
//rightButton
	$(".backTop").click(function(){
		$(".backTop").css({"background":"none"})
		$(".backtop2").css({"display":"block"})
		$("body,html").css({"display":"block"})
		             .animate({
						scrollTop:0
					},1000,function(){
						$(".backTop").hide()
					})
	})
	$(".backTop").mouseleave(function(){
		$(".backtop2").css({"display":"none"})
    })
	$(window).scroll(function(){
        var htmlTop = $(document).scrollTop();
        if( htmlTop > 0){
            $(".backTop").fadeIn();    
        }else{
            $(".backTop").fadeOut();
        }
    });

$(".kefu").mouseenter(function(){
	$(".kefu").css({"background":"none"})
	$(".kf2").css({"display":"block"})
})
$(".kefu").mouseleave(function(){
	$(".kefu").css({"background":"url(../images/indeximages/kf.png)"})
	$(".kf2").css({"display":"none"})
})
$(".rightCart").mouseenter(function(){
	$(".rightCart").css({"background":"none"})
	$(".gw2").css({"display":"block"})
})
$(".rightCart").mouseleave(function(){
	$(".rightCart").css({"background":"url(../images/indeximages/gw.png)"})
	$(".gw2").css({"display":"none"})
})

$(".erweima").mouseenter(function(){
	$(".erweima").css({"background":"none"})
	$(".wx2").css({"display":"block"})
	$("#ma").css({"display":"block"})
})
$(".erweima").mouseleave(function(){
	$(".erweima").css({"background":"url(../images/indeximages/wx.png)"})
	$(".wx2").css({"display":"none"})
	$("#ma").css({"display":"none"})
})
$(".shoucang").mouseenter(function(){
	$(".shoucang").css({"background":"none"})
	$(".sc2").css({"display":"block"})
})
$(".shoucang").mouseleave(function(){
	$(".shoucang").css({"background":"url(../images/indeximages/sc.png)"})
	$(".sc2").css({"display":"none"})
})

