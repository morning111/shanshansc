$("#footer").load("footer.html");
$("#header").load("header.html");


//我的山山
/*$("#logo").click(function(){
	window.location.href = "../index.html";
})*/
$("#myShanshan").click(function(){
	location.href = "../html/login.html";
})
$("#myCart").click(function(){
	location.href="../html/cart.html";
})
$("#myCart").mouseenter(function(){
	$(".lately").css({display:"block"})
})
$("#myCart").mouseleave(function(){
	$(".lately").css({display:"none"})
})

//全部分类
var classifyArr = ["按销量","按分类","按价格","按收藏"];
for(var i=0;i<classifyArr.length;i++){
	$(".classifyall").append("<div>"+classifyArr[i]+"</div>")
}
var goodssortArr = ["陕西洛川苹果","河北赵县雪花梨","河北赵县皇冠梨","森通有机黑木耳，榛子","海南热带水果","云南水果","优质进口水果"];
for(var i=0;i<goodssortArr.length;i++){
	$(".sorts").append("<li>"+goodssortArr[i]+"</li>")
}
$(".daohang_all2").mouseenter(function(){
	$(".classify").css("display","block")
})
$(".classify").mouseleave(function(){
	$(this).css("display","none")
})

//nav导航栏的滚动条
/*$("#scroll").css({"marginTop":"0"});
$("#gonggao").css({"overflow":"hidden"});
$("#scroll").css({"marginTop":"-1px"});
var num=0;
function AutoScroll(){
	num++;
	$("#scroll").animate({
		marginTop:"-=20px"
	},1000,function(){
		if(num==2){
			num=0;
		$(this).css("marginTop","20px")/*.animate({marginTop:"-1px"},500)*//*.find("p:first").appendTo(this);
		    }   
	});
}
$(document).ready(function(){
	setInterval("AutoScroll()",1600);
});*/
$("#gonggao").css({"overflow":"hidden"});
function AutoScroll(){
	$("#scroll").animate({
	    marginTop:"-20px"
	   },1000,function(){
	    $(this).animate({marginTop:"0px"},500).find("p:first").appendTo(this);
	   });
	}    
	$(document).ready(function(){
	setInterval('AutoScroll()',2000);	
	}); 
//放大镜
window.onload = function(){
			function $(id){
				return document.getElementById(id);
			}
			var oWrap = $('wrap');			
			var aBigList = $('bigList').children; //所有的大图
			var oBigList = $("bigList"); //大盒子
			var aSmallList = $('smallList').children;//所有的小图
			var oSmallList = $('smallList');//内小盒子
			var  oMark = $('mark');//遮罩层
			var oFloat = $('floatB');//小灰框
			var aBiggestList = $('biggestList').children;//右侧大图
			var oBiggest = $('biggest');//右侧大盒子
			var aImg = oBiggest.getElementsByTagName('img');//右边大图的img
			
			

			// 遍历
			var nowPic = 0;
			var zIndex = 1;
			init();
			for(var i =0 ; i < aSmallList.length; i ++){
				aSmallList[i].index=i;
				aSmallList[i].onmouseover = function(){
					sport(this,{opacity:100});
				}
				aSmallList[i].onmouseout = function(){
					if(this.index != nowPic){
						sport(this,{opacity:50});
					}
				}
				aSmallList[i].onclick = function(){
					nowPic = this.index;
					init();
				}
				// 放大镜
				oMark.onmouseover = function(){
					oFloat.style.display = "block";
					aBiggestList[nowPic].style.display = "block";
				}
				oMark.onmouseout = function(){
					oFloat.style.display = "none";
					aBiggestList[nowPic].style.display = "none";
				}
				oMark.onmousemove = function(evt){
					var e = evt || window.event;
					var l = e.pageX - oWrap.offsetLeft - aBigList[nowPic].offsetLeft - oFloat.offsetWidth/2;
					var t = e.pageY - oWrap.offsetTop - aBigList[nowPic].offsetTop - oFloat.offsetHeight/2;

					if(l<0){
						l = 0 ;
					}else if(l > oMark.offsetWidth - oFloat.offsetWidth){
						l =  oMark.offsetWidth - oFloat.offsetWidth;
					}
					if(t < 0){
						t = 0 ;
					}else if(t >  oMark.offsetHeight - oFloat.offsetHeight){
						t=  oMark.offsetHeight - oFloat.offsetHeight;
					}
					oFloat.style.left = l +'px';
					oFloat.style.top = t + "px";
					var precentX = l/(oMark.offsetWidth - oFloat.offsetWidth);
					var precentY = t/(oMark.offsetHeight - oFloat.offsetHeight);
					aImg[nowPic].style.left = -precentX*(aImg[nowPic].offsetWidth - oBiggest.offsetWidth) + "px";
					aImg[nowPic].style.top = -precentY*(aImg[nowPic].offsetHeight - oBiggest.offsetHeight) + "px";

				}
			}
			function init(){
				//大图轮播
				aBigList[nowPic].style["z-index"] = ++zIndex;
				
				//初始化小图的透明度
			for(var i = 0;i < aSmallList.length;i ++){
				sport(aSmallList[i],{opacity : 50});
			}
			sport(aSmallList[nowPic],{opacity : 100});
			}
		
		};

//微信二维码显示
$(".zhifu").mouseenter(function(){
	$(".yincang").css("display","block")
})
$(".zhifu").mouseleave(function(){
	$(".yincang").css("display","none")
})
//查看所有产品
$(".goodsForm li").mouseenter(function(){
	$(this).siblings()
	       .css("backgroundColor","#EBF8EB")
})
$(".goodsForm li").mouseleave(function(){
	$(this).siblings()
	       .css("backgroundColor","#fff")
})
//商品排行榜导入
	/*$.ajax({
		type:"get",
  		url:"http://127.0.0.1/shanshanshangcheng/json/particular.json",
  		async:true,
  		success:function(json){
  			var title="";
  			var val="";
  			for(var attr in json){
  				title +=`<div id="hotGoods-1" class="active">${ json[attr].name }</div>`;
				for(var i = 0; i<json.length;i++){
		            val +=`<li>
							    <img src="${json[i].img}"/>
								<a href="javascript:;" title="陕西特产 正宗洛川苹果 新鲜红富士24个75mm果径 脆甜多汁 多省包邮 ">${json[i].title}</a>
								<span class="jiage">${json[i].jiage}</span>
								<div class="soldOut">${json[i].soldOut}</div>
							</li>`
					}
				}
  			    $("#hotGoodsSail").html(title);
				$(".hotgoodsList").html(val);
				
				//实现选项卡分类效果
			$("#hotGoodsSail .active").mouseenter(function(){
				var index = $(this).index() +1;
				var cname = "classify00" + index;
				var str = "";
				for(var i=0;i<json[cname].list.length;i++){
					var product = json[cname].list[i];
					str +=`<li>
					<img src="${json[i].img}"/>
									<a href="cart.html?pid=${product.id}&cname=${attr}" title="陕西特产 正宗洛川苹果 新鲜红富士24个75mm果径 脆甜多汁 多省包邮 ">${json[i].title}</a>
									<span class="jiage">${json[i].jiage}</span>
									<div class="soldOut">${json[i].soldOut}</div>
									<span style="display:none" data-id=${product.id} data-img=${product.img} data-zhushi=${product.zhushi} data-cuxiaojiage=${product.cuxiaojiage} data-danjia=${product.danjia}></span>
								</li>`
				    }
				    $(".hotgoodsList").html(str);
			   }) 			
  		    }
	    })*/
	
	ajaxGet("../json/particular.json",function(res){
	var json = JSON.parse(res);
	var val="";
	for(var i = 0; i<json.length;i++){
		val +=`<li>
					<img src="${json[i].img}"/>
									<a href="javascript:;" title="陕西特产 正宗洛川苹果 新鲜红富士24个75mm果径 脆甜多汁 多省包邮 ">${json[i].title}</a>
									<span class="jiage">${json[i].jiage}</span>
									<div class="soldOut">${json[i].soldOut}</div>
								</li>`
	}
	$(".hotgoodsList").html(val)
})


/*$("#logo").click(function(){
	window.location.href = "../index.html";
})*/



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