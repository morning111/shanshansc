$("#header").load("html/indexheader.html");
	//header
	$("#login").click(function(){
		location.href = "html/login.html";
	})
	$("#register").click(function(){
		location.href = "html/register.html";
	})
	//logo
	$("#myShanshan").click(function(){
		location.href = "html/login.html";
	})
	$("#myCart").click(function(){
		location.href="html/cart.html";
	})
	$("#myCart").mouseenter(function(){
		$(".lately").css({display:"block"})
	})
	$("#myCart").mouseleave(function(){
		$(".lately").css({display:"none"})
	})
	$("#myShanshan").mouseenter(function(){
		$(".changeColor1").css({color:"#45b035"});
	})
	$("#myShanshan").mouseleave(function(){
		$(".changeColor1").css({color:"#666"})
	})
	//nav
	$("#navdaohang").mouseenter(function(){
		$("li").eq($(this).index())
		       .css({background:"#134A0E"})
	})
	//banner
	//lunbotu
	var timer = setInterval(autoPlay,2000);
	var index = 0;
	function autoPlay(){
		index++;
		if(index ==4){
			index =0;
		}
		$("#little-dot li").eq(index)
		          .addClass("current")
		          .siblings()
		          .removeClass("current");
		$("#lunbotu-pic li").eq(index)
		          .fadeIn(1000)
		          .siblings()
		          .fadeOut(1000);
	}
	$("ol li").click(function(){
		$("#little-dot li").eq(index)
		          .addClass("current")
		          .siblings()
		          .removeClass("current");
		$("#lunbotu-pic li").eq(index)
		          .fadeIn(1000)
		          .siblings()
		          .fadeOut(1000);
	})
	
	//二级导航栏
	$(".list-ul-one").mouseenter(function(){
		$(".A-em1").css({backgroundPosition:"0 -58px"})
		$("#first").css({color:"#45b035"})
		$(".list-ul-one #Anav-title").parent()
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"radial-gradient(ellipse,#ece9e9,#fcf9f9)"})
		$("#shengxian-sort").css({display:"block"})                
	})
	$(".list-ul-one").mouseleave(function(){
		$(".A-em1").css({backgroundPosition:"0 0"})
		$("#first").css({color:"#666"})	
	    $(".list-ul-one #Anav-title").parent()		                
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"#fff"})
		$("#shengxian-sort").css({display:"none"})
	})
	
	
	$(".list-ul-two").mouseenter(function(){
		$(".A-em2").css({backgroundPosition:"-28px -58px"})
		$("#second").css({color:"#45b035"})
		$(".list-ul-two #Anav-title").parent()		                
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"radial-gradient(ellipse,#ece9e9,#fcf9f9)"})
		$("#liangyou-sort").css({display:"block"})  
	})
	$(".list-ul-two").mouseleave(function(){
		$(".A-em2").css({backgroundPosition:"-28px 0"})
		$("#second").css({color:"#666"})	
		$(".list-ul-two #Anav-title").parent()
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"#fff"})
		$("#liangyou-sort").css({display:"none"})
	})
	$(".list-ul-three").mouseenter(function(){
		$(".A-em3").css({backgroundPosition:"-56px -58px"})
		$("#third").css({color:"#45b035"})
		$(".list-ul-three #Anav-title").parent()		                
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"radial-gradient(ellipse,#ece9e9,#fcf9f9)"})
		$("#chaye-sort").css({display:"block"})  
	})
	$(".list-ul-three").mouseleave(function(){
		$(".A-em3").css({backgroundPosition:"-56px 0"})
		$("#third").css({color:"#666"})	
		$(".list-ul-three #Anav-title").parent()
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"#fff"})
	    $("#chaye-sort").css({display:"none"})
	})
	$("list-ul-four").mouseenter(function(){
		$(".A-em4").css({backgroundPosition:"-84px -58px"})
		$("#fourth").css({color:"#45b035"})
		$("list-ul-four #Anav-title").parent()		                
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"radial-gradient(ellipse,#ece9e9,#fcf9f9)"})
		$("#xiuxian-sort").css({display:"block"})  
	})
	$("list-ul-four").mouseleave(function(){
		$(".A-em4").css({backgroundPosition:"-84px 0"})
		$("#fourth").css({color:"#666"})	
		$("list-ul-four #Anav-title").parent()
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"#fff"})
	    $("#xiuxian-sort").css({display:"none"})
	})
	$("li:nth-child(5)").mouseenter(function(){
		$(".A-em5").css({backgroundPosition:"-140px -58px"})
		$("#fifth").css({color:"#45b035"})
		$("li:nth-child(5) #Anav-title").parent()		                
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"radial-gradient(ellipse,#ece9e9,#fcf9f9)"})
		$("#jiushui-sort").css({display:"block"})  
	})
	$("li:nth-child(5)").mouseleave(function(){
		$(".A-em5").css({backgroundPosition:"-140px 0"})
		$("#fifth").css({color:"#666"})	
		$("li:nth-child(5) #Anav-title").parent()
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"#fff"})
	    $("#jiushui-sort").css({display:"none"})
	})
	$("li:nth-child(6)").mouseenter(function(){
		$(".A-em6").css({backgroundPosition:"-168px -58px"})
		$("#sixth").css({color:"#45b035"})
		$("li:nth-child(6) #Anav-title").parent()		                
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"radial-gradient(ellipse,#ece9e9,#fcf9f9)"})
		$("#baihuo-sort").css({display:"block"})  
	})
	$("li:nth-child(6)").mouseleave(function(){
		$(".A-em6").css({backgroundPosition:"-168px 0"})
		$("#sixth").css({color:"#666"})	
		$("li:nth-child(6) #Anav-title").parent()
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"#fff"})
	    $("#baihuo-sort").css({display:"none"})
	})
	$("li:nth-child(7)").mouseenter(function(){
		$(".A-em7").css({backgroundPosition:"-196px -58px"})		           
		$("#seventh").css({color:"#45b035"})
		$("li:nth-child(7) #Anav-title").parent()		                
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"radial-gradient(ellipse,#ece9e9,#fcf9f9)"})
		$("#youxuan-sort").css({display:"block"})  
	})
	$("li:nth-child(7)").mouseleave(function(){
		$(".A-em7").css({backgroundPosition:"-196px 0"})
		$("#seventh").css({color:"#666"})	
		$("li:nth-child(7) #Anav-title").parent()
		                .css({background:"#fff"})
		                .siblings()
		                .css({background:"#fff"})
	    $("#youxuan-sort").css({display:"none"})
	})
	//详情部分的json导入  ‘热卖商品’部分
  $.ajax({
  		type:"get",
  		url:"http://127.0.0.1/shanshanshangcheng/json/tab.json",
  		async:true,
		success:function(json){
			var title = "";
			var conStr = "";
			for(var attr in json){
				title +=`<li class="first-child active">
					<a href="javascript:;" class="hotsail">${ json[attr].name }</a>
				</li>`;
				for(var j=0;j<json[attr].list.length;j++){
					var product = json[attr].list[j];
					conStr +=`<li class="main selected">
								<a href="cart.html?pid=${product.id}&cname=${attr}">
								<img src="images/indeximages/${product.img}" class="change"/>
							    </a>
							    <p class="zhushi">${product.zhushi}</p>
							    <p class="cuxiaojiege">${product.cuxiaojiege}<span>${product.danjia}</span></p>
							    <span style="display:none" data-id=${product.id} data-img=${product.img} data-zhushi=${product.zhushi} data-cuxiaojiage=${product.cuxiaojiage} data-danjia=${product.danjia}></span>
							</li>`
				}				
			}
			$(".yhtm").html(title);
			$(".tab-goodsSail").html(conStr);
			//实现选项卡分类效果
			$(".yhtm .active").mouseenter(function(){
				var index = $(this).index() +1;
				var cname = "classify00" + index;
				var str = "";
				for(var i=0;i<json[cname].list.length;i++){
					var product = json[cname].list[i];
					str +=`<li class="main selected">
								<a href="cart.html?pid=${product.id}&cname=${attr}">
								<img src="images/indeximages/${product.img}" class="change"/>
							    </a>
							    <p class="zhushi">${product.zhushi}</p>
							    <p class="cuxiaojiege">${product.cuxiaojiege}<span>${product.danjia}</span></p>
							    <span style="display:none" data-id=${product.id} data-img=${product.img} data-zhushi=${product.zhushi} data-cuxiaojiage=${product.cuxiaojiage} data-danjia=${product.danjia}></span>
							</li>`
				}
				$(".tab-goodsSail").html(str);
			})
		}
	})
    

    
    
 
 
 //详情部分的json导入 一楼
ajaxGet("json/index1.json",function(res){
	var json = JSON.parse(res);
	var val="";
	for(var i = 0; i<json.length;i++){
		val +=`<li class="fruit1">

                    <a href="javascript:;" class="fruit2">
                         <img src="images/indeximages/${json[i].img}" class="jiagou1"/>    </a>      
                        <a href="javascript:;" id="jia-gou">${json[i].jiagou}</a>                       

                   
					<p class="zhushi" title="${json[i].title} ">${json[i].zhushi}</p>
					<p class="cuxiaojiege">${json[i].cuxiaojiege}</p>
					
				</li>`
	}
	$(".tab-goodsSail-two").html(val);
	a();
})
function a(){
	$(".tab-goodsSail-two .jiagou1").each(function(){
		$(this).mouseenter(function(){
			$(this).parent().parent().find("#jia-gou")
			       .fadeIn(500)
                /*.animate({"top":134},500,function(){
                	$(this).css("display","block")
                })*/
		})                 
 })

 $(".tab-goodsSail-two .jiagou1").each(function(){
		$(this).mouseleave(function(){
			$(this).parent().parent().find("#jia-gou")
			       .fadeOut(500)
                /*.animate({"top":134},500,function(){
                	$(this).css("display","none")
                })*/
		})                 
 })
}
 
//二楼
ajaxGet("json/index2.json",function(res){
	 json = eval(res);
	var str="";
	for(var i = 0; i<json.length;i++){
		str +=`<li class="fruit1">

                    <a href="javascript:;" class="fruit2">
                         <img src="images/indeximages/${json[i].img}" class="jiagou1"/>    </a>      
                        <a href="javascript:;" id="jia-gou">${json[i].jiagou}</a>                       

                   
					<p class="zhushi" title="${json[i].title}">${json[i].zhushi}</p>
					<p class="cuxiaojiege">${json[i].cuxiaojiege}</p>
					
				</li>`
	}
	
	$(".tab-goodsSail-second").html(str);
	b();
})
function b(){
 $(".tab-goodsSail-second .jiagou1").each(function(){
 	$(this).mouseenter(function(){
 		$(this).parent().parent().find("#jia-gou")  
 		       .fadeIn(500)
 	})
 	$(this).mouseleave(function(){
 		$(this).parent().parent().find("#jia-gou")  
 		       .fadeOut(500)
 	})
 	
 })
}

 //三楼
 ajaxGet("json/index3.json",function(res){
	 var json = JSON.parse(res)
	var str="";
	for(var i = 0; i<json.length;i++){
		str +=`<li class="fruit1">

                    <a href="javascript:;" class="fruit2">
                         <img src="images/indeximages/${json[i].img}" class="jiagou1"/>    </a>      
                        <a href="javascript:;" id="jia-gou">${json[i].jiagou}</a>                       

                   
					<p class="zhushi" title="${json[i].title}">${json[i].zhushi}</p>
					<p class="cuxiaojiege">${json[i].cuxiaojiege}</p>
					
				</li>`
	}
	$(".tab-goodsSail-third").html(str);
	c();
})
function c(){

 $(".tab-goodsSail-third .jiagou1").each(function(){
 	$(this).mouseenter(function(){
 		$(this).parent().parent().find("#jia-gou")  
 		       .fadeIn(500)
 	})
 	$(this).mouseleave(function(){
 		$(this).parent().parent().find("#jia-gou")  
 		       .fadeOut(500)
 	})
 	
 })
 	
}
//四楼
 ajaxGet("json/index4.json",function(res){
	 var json = JSON.parse(res)
	var str="";
	for(var i = 0; i<json.length;i++){
		str +=`<li class="fruit1">

                    <a href="javascript:;" class="fruit2">
                         <img src="images/indeximages/${json[i].img}" class="jiagou1"/>    </a>      
                        <a href="javascript:;" id="jia-gou">${json[i].jiagou}</a>                       

                   
					<p class="zhushi" title="${json[i].title}">${json[i].zhushi}</p>
					<p class="cuxiaojiege">${json[i].cuxiaojiege}</p>
					
				</li>`
	}
	$(".tab-goodsSail-fourth").html(str);
	d();
})
function d(){

 $(".tab-goodsSail-fourth .jiagou1").each(function(){
 	$(this).mouseenter(function(){
 		$(this).parent().parent().find("#jia-gou")  
 		       .fadeIn(500)
 	})
 	$(this).mouseleave(function(){
 		$(this).parent().parent().find("#jia-gou")  
 		       .fadeOut(500)
 	})
 	
 })
 	
}
 //五楼
 ajaxGet("json/index5.json",function(res){
	 var json = JSON.parse(res)
	var str="";
	for(var i = 0; i<json.length;i++){
		str +=`<li>
					<a href="javascript:;" class="life-pic"><img src="images/indeximages/${json[i].img}"/></a>
					<div id="fangkuai">
						<p>
						<a href="javascript:;" class="baobao">${json[i].chi}</a>
					</p>
					<hr/>
					<p >
						<a href="javascript:;" class="eat">${json[i].zifu}</a>
					</p>
					</div>
					
				</li>`
	}
	$(".tab-goodsSail-fifth").html(str)
})
 
//rightButton
	$(".backTop").click(function(){
		$(".backTop").css({"background":"none"})
		$(".backtop2").css({"display":"block"})
		$("body,html").css({"display":"block"})
		             .animate({
						scrollTop:0
					},1000)		
	})
	$(".backTop").mouseleave(function(){
	$(".backtop2").css({"display":"none"})
    })

$(".kefu").mouseenter(function(){
	$(".kefu").css({"background":"none"})
	$(".kf2").css({"display":"block"})
})
$(".kefu").mouseleave(function(){
	$(".kefu").css({"background":"url(images/indeximages/kf.png)"})
	$(".kf2").css({"display":"none"})
})
$(".rightCart").mouseenter(function(){
	$(".rightCart").css({"background":"none"})
	$(".gw2").css({"display":"block"})
})
$(".rightCart").mouseleave(function(){
	$(".rightCart").css({"background":"url(images/indeximages/gw.png)"})
	$(".gw2").css({"display":"none"})
})
$(".erweima").mouseenter(function(){
	$(".erweima").css({"background":"none"})
	$(".wx2").css({"display":"block"})
	$("#ma").css({"display":"block"})
})
$(".erweima").mouseleave(function(){
	$(".erweima").css({"background":"url(images/indeximages/wx.png)"})
	$(".wx2").css({"display":"none"})
	$("#ma").css({"display":"none"})
})
$(".shoucang").mouseenter(function(){
	$(".shoucang").css({"background":"none"})
	$(".sc2").css({"display":"block"})
})
$(".shoucang").mouseleave(function(){
	$(".shoucang").css({"background":"url(images/indeximages/sc.png)"})
	$(".sc2").css({"display":"none"})
})



