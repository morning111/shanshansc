
$("#footer").load("footer.html");
$("#header").load("header.html");


$(".logo").click(function(){
	window.location.href = "../index.html";
})

var name=getCookie("username");
var pass=getCookie("password");
console.log($("#name").val());
console.log(pass);		
$("#btn").click(function(){
	var loname=$("#name").val();
	var lopass=$("#pwd").val();
	if(loname==name&& lopass==pass){		
			window.location.href="../index.html";
	  }else{
	  		$("#tip3").html("账号或密码输入错误，请重新输入");
	  }
})

$("#name").focus (function(){
	$("#tip1").css({
	display:"block",
	background:"#E2ADAB"
}),
	$("#name").css({
	borderColor:"#DD1F1F"
	});	
})
	
$("#name").blur(function(){
if($("#name").val()==name){
/*console.log($(this).val())*/
//正确
$("#tip1").html("输入正确");
$("#tip1").css({
	display:"none"
})
}else{	
	
   $("#tip1").html("输入账号错误或不存在,请重新输入");
}
$("#pwd").focus(function(){
		$("#tip2").css({
			display:"block",
			background:"#E2ADAB"
		}),
		$("#pwd").css({
			borderColor:"#DD1F1F"
		});
})

$("#pwd").blur(function(){
	if($("#pwd").val()==pass){
	//正确
	/*console.log($(this).val())*/
	$("#tip2").html("输入正确");
    $("#tip2").css({
		display:"none"
})
	}else{
		//错误
		
		$("#tip2").html("密码输入格式错误，请重新输入");
	}
})

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
  