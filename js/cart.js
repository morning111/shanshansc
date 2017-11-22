$("#footer").load("footer.html");
$("#header").load("header.html");
ajaxGet("../json/cart.json",function(res){
	var json = JSON.parse(res);
	var val ="";
	for(var i=0;i<json.length;i++){
		val +=`<div id="shop-cart-1">
					<input type="checkbox" name="check-all" id="check-all" value="" />
					<span id="check-all1">${json[i].checkall}</span>
					<span id="shop-name">${json[i].shopname}</span>
					<div class="connect-cart-us"></div>
				</div>
				<div id="cart-shop-goods">
					
				<div id="left-cart-goods">
					<input type="checkbox" name="cart-shop-select" id="cart-shop-select" class="check-all" value="" />
					<img src="${json[i].img}"/><p class="scan-bigPic">${json[i].scanbigPic}</p>
					<li><span class="account-for">${json[i].accountfor}</span></li>
					<li><span class="specification">${json[i].specification}</span></li>
					
				<span id="guarantee-1">${json[i].guarantee1}</span>
				<div class="guarantee-2"></div>
			</div>
			<div id="right-cart-goods">
				<span class="what-num">${json[i].whatnum}</span>
				<del class="del">${json[i].del}</del>
				<span><a href="javascript:;" class="all-cart-total">${json[i].allcarttotal}</a></span>
				<div class="save-money">${json[i].savemoney}</div>
				<button class="btnL updateCount">-</button>
				<input type="text" name="cart-num" id="cart-num" value="1" />
				<button class="btnR updateCount">+</button>
				<div id="promotion">${json[i].promotion}</div>
				<span id="money">${json[i].money}</span>
				<span id="collect">${json[i].collect}</span>
				<span id="del-cart">${json[i].delcart}</span>
				</div>
			</div>`
	}
	$("#cart-amount-1").html(val)
})
//点击左侧复选框   结算商品数量和个数
$(".check-all").click(function(){
	jiesuan();
})
//全和结算
$("#check-all").click(function(){
	$(".check-all").prop("checked",$(this).prop("checked"));
})
//结算功能
function jiesuan(){

	var proMoney = 0;
	$("..check-all:checked").each(function(){
		
		proMoney += parseInt($(this).parent().find(".total").html());		
	})
	$(".total").html(proMoney);
}
$(".updateCount").click(function(){
	//确定操作的商品编号
	var id = $(this).parent().data("id");
	var pname = $(this).parent().data("name");
	//获取操作符
	var sign = $(this).html();
	var shopnum = $(this).parent().find(".total").html();
	if(shopnum == 1 && sign == "-"){
		return;
	}
	for(var i=0;i<arr.length;i++){
		if(id ==arr[i].id&&pname ==arr[i].name){
			sign == "+" ? arr[i].count++:arr[i].count--;
			//重新改写cookie数据
			setCookie("prolist",JSON.stringify(arr));
			//操作页面
			$(this).parent().find(".total").html(arr[i].count);
			$(this).parent().next().html(arr[i].count*arr[i].price + "元");
			//结算
			jiesuan();
			break;
		}
	}
})

//删除
$("#del-cart").click(function(){
	//获取当前要删除的商品编号 和 名字
	var id = $(this).parent().parent().find("button").data("id");
	var pname = $(this).parent().parent().find("button").data("name");
	for( var i = 0 ; i < arr.length ; i++ ){
			if( id == arr[i].id && pname == arr[i].name ){
				if( confirm("确定要删除么？") ){
					//将数组中位置i处的数据删除  splic(2,1)
					arr.splice(i,1);
					//操作数组改变后  重新存储cookie  
					setCookie("prolist",JSON.stringify(arr));
					
					//修改页面
					$(this).parent().parent().remove();
				}
				break;
			}
		}
})


$(".logo").click(function(){
	window.location.href = "../index.html";
})

//
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
$(".huaguo li").mouseenter(function(){
	$(".huaguo li").eq($(this).index())
                   .css("background","#134A0E")
                   .siblings()
                   .css("background","#49a03d")
})
$(".huaguo li").mouseleave(function(){
	$(".huaguo li").eq($(this).index())
                   .css("background","#49a03d")
                   .siblings()
                   .css("background","#49a03d")
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
