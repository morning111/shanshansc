$("#footer").load("footer.html");
$("#header").load("header.html");
$("#rightButton").load("rightButton.html");

ajaxGet("../json/cart.json",function(res){
	var json = JSON.parse(res);
	var val ="";
	for(var i=0;i<json.length;i++){
		val +=`<div id="shop-cart-1">
					<input type="checkbox" name="check-all" id="check-all" value="" />
					<span id="check-all1">${json[i].check-all}</span>
					<span id="shop-name">${json[i].shop-name}</span>
					<div class="connect-cart-us"></div>
				</div>
				<div id="cart-shop-goods">
					
				<div id="left-cart-goods">
					<input type="checkbox" name="cart-shop-select" id="cart-shop-select" value="" />
					<img src="${json[i].img}"/><p class="scan-bigPic">${json[i].scan-bigPic}</p>
					<li><span class="account-for">${json[i].account-for}</span></li>
					<li><span class="specification">${json[i].specification}</span></li>
					
				<span id="guarantee-1">${json[i].guarantee-1}</span>
				<div class="guarantee-2"></div>
			</div>
			<div id="right-cart-goods">
				<span class="what-num">${json[i].what-num}</span>
				<del class="del">${json[i].del}</del>
				<span><a href="javascript:;" class="all-cart-total">${json[i].all-cart-total}</a></span>
				<div class="save-money">${json[i].save-money}</div>
				<button class="btnL">-</button>
				<input type="text" name="cart-num" id="cart-num" value="1" />
				<button class="btnR">+</button>
				<div id="promotion">${json[i].promotion}</div>
				<span id="money">${json[i].money}</span>
				<span id="collect">${json[i].collect}</span>
				<span id="del-cart">${json[i].del-cart}</span>
				</div>
			</div>`
	}
	$("#cart-amount-1").html(val)
})

$(function(){
	getCookie("pro1");
	console.log(getCookie("pro1"));
	$.("../json/cart.json").then(function(res){
		
		
		var acook = eval(getCookie("pro1"))
		var html = "";
		for(var i=0;i<acook.length;i++){
			console.log(acook[i].id);
			var num = acook[i].num;
			id=acook[i].id;
			html+=``
		}
	})
})

$(".logo").click(function(){
	window.location.href = "../html/index.html";
})