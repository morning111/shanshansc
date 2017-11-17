$("#footer").load("footer.html");
$("#header").load("header.html");

//发货地址 销量排序
$(".address").mouseenter(function(){
	$(".address-select").css("display","block")
})
$(".address").mouseleave(function(){
	$(".address-select").css("display","none")
})
//商品动态引入
ajaxGet("../json/list.json",function(res){
	var json=JSON.parse(res);
	var val="";
	for(var i=0;i<json.length;i++){
		val +=`<div id="particular-listAll">
				<img src="${json[i].img}"/>
				<div id="shiyi">
					<span class="sail-price">${json[i].txt}</span><span class="unit-price">${json[i].price}</span>
					<p class="state">${json[i].title}</p>
					
					<p class="sales-volume">${json[i].volume}<span class="volume-num">${json[i].num}</span>
						<span class="upright"></span>
						<span class="evaluate">${json[i].evaluate}</span>						
						</p>
						
						<p class="cate">${json[i].cate}</p>
						<span class="bac-msg"></span>
				</div>				
			</div>`
	}
	$("#particular-list").html(val)
})

$(".logo").click(function(){
	window.location.href = "../index.html";
})
                       
$("#login").click(function(){		
		window.location.href="../html/login.html";		
		})
$("#register").click(function(){		
		window.location.href="../html/register.html";		
		})
$("#hadGoods").click(function(){			
		window.location.href="../html/cart.html";		
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



