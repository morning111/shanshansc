$("#footer").load("footer.html");
$("#header").load("header.html");

/*//header
$(".dingdan_1").mouseenter(function(){
	$(".dingdan_2").css("display","block")
})
$(".dingdan_1").mouseleave(function(){
	$(".dingdan_2").css("display","none")
})
$(".shoucangjia_1").mouseenter(function(){
	$(".shoucangjia_2").css("display","block")
})
$(".shoucangjia_1").mouseleave(function(){
	$(".shoucangjia_2").css("display","none")
})
$(".kehufuwu_1").mouseenter(function(){
	$(".kehufuwu_2").css("display","block")
})
$(".kehufuwu_1").mouseleave(function(){
	$(".kehufuwu_2").css("display","none")
})*/

//字体变化
$(".same-1").mouseenter(function(){
	$(this).css({"color":"yellow","background":"#24C336"})
	        
})
$(".same-1").mouseleave(function(){
	$(this).css({"color":"#666","background":"#fff"})
})
//水果
$(".change-1").mouseenter(function(){
	$(".tab-down").css("display","block")
	$(".zhuan").css("display","block")
})

$(".change-1").mouseleave(function(){
	$(this).css("display","block")
	$(".tab-down").css("display","none")
	$(".zhuan").css("display","none")
})
//发货地址 销量排序
var provArr = ["河南","河北","湖南","湖北","山东","山西","广西","广东","福建","四川","海南","新疆","吉林","山西","宁夏","黑龙江"];
for( var i = 0 ; i < provArr.length ; i++ ){
		$("#prov").append( "<div><a href='javascript:;' class='sortgoods'>"+provArr[i]+"</a></div>" )
	}
$("#prov div").mouseenter(function(){
	$("#prov div").eq($(this).index()).css("color","#24C336")
})
$("#prov div").mouseleave(function(){
	$("#prov div").eq($(this).index()).css("color","#666")
})
/*var cityArr = [["安阳","南阳","洛阳","信阳","濮阳"],["保定","石家庄","承德"],["长沙","好","h1","h2"]];
var countyArr = [[["林州","内黄","安阳县"],["西峡","邓州"],["洛川","伊川"]],[["南乐","好好"]]];*/

/*//页面打开后 将省的信息添加到对应的下拉列表
	for( var i = 0 ; i < provArr.length ; i++ ){
		$("#prov").append( "<div value="+i+">"+provArr[i]+"</div>" )
	}
	
	//为省的下拉列表添加一个改变事件 改变省 获取对应的市
	$("#prov").change(function(){
		//再次改变之前清空市的信息
		//$("#city").empty();
		
		$("#city")[0].length = 1;
		//保留市中的第一个option  js的length属性可读写，而jquery中的length属性不可以该写，所以将jquery元素转成js元素
		
		//alert( $(":selected").index() );
		//index = $(":selected").index() - 1;
		var index = $(this).val();//省的下标  
		var city = cityArr[index];//某个被选择的省对应的市  一维数组
		
		for( var i = 0 ; i < city.length ; i++ ){
			$("#city").append( "<option value='"+index+"_"+i+"'>"+city[i]+"</option>" )
		}
	})
	//为市添加一个改变事件  获取对应的县
	$("#city").change(function(){
		$("#county")[0].length = 1;
		var str = $(this).val();//省和市的下标
		var arr = str.split("_");
		var provIndex = arr[0];
		var cityIndex = arr[1];
		var county = countyArr[provIndex][cityIndex];
		for( var i = 0 ; i < county.length ; i++ ){
			$("#county").append( "<option>"+county[i]+"</option>" )
		}
	})
	*/
	
$(".address").click(function(){
	$(".address-select").css("display","block")
})
$(".address-select").mouseleave(function(){
	$(this).css("display","none")
})

//默认排序
	var shunxuArr = ["价格从低到高","价格从高到低","总销量从高到低","按发布时间排序","恢复默认排序"];
	for(var i=0;i<shunxuArr.length;i++){
		$(".shunxu").append( "<option>"+shunxuArr[i]+"</option>" )	
	}
	//排序
	$("option").eq(2).click(function(){
		onTest();
	})
	//shunxuArr.eq(0).val=onTest();//................
function onTest(){
	var arr = $("#particular-listAll");
	arr.sort(function(a,b){
		return a.innerHTML>b.innerHTML?1:-1;
	});
	$("#particular-list").empty().append(arr);
}

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
						<div class="flagship">
							<p class="cate">${json[i].cate}</p>
							<span class="bac-msg"></span>
						</div>
				    </div>				
			    </div>`
	}
	$("#particular-list").html(val);
	tiao();
})
 //点击图片跳转到详情页    
 function tiao(){
 	$("#particular-listAll img").click(function(){
	 	window.location.href="../html/particulars.html";
	 })
 }
 
 
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



