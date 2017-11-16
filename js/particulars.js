$("#footer").load("footer.html");
$("#header").load("header.html");
$("#rightButton").load("rightButton.html");



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


$("#logo").click(function(){
	window.location.href = "../html/index.html";
})