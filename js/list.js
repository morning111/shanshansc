$("#footer").load("footer.html");
$("#header").load("header.html");
$("#rightButton").load("rightButton.html");

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
	window.location.href = "../html/index.html";
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