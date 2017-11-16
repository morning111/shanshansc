  $("#olist").on("click",".obtn",function(){
    console.log(this.id)
    if(!getCookie("goods")){
        setCookie("goods",'[{"id":"'+this.id+'","num":"1"}]');
        //console.log("第一次添加数据");  结构;
    }else{
        //console.log("第二次添加数据");
        //1.获取原cookie数据;
        var sCookie =getCookie("goods");
        console.log(sCookie)
        //2.把字符串cookie变成 数组cookie 方便操作;
         var aCookie = JSON.parse(sCookie);
            // 2.1 判定当前的购物车数组之中是否有数据;
                //如果有数据，对num属性进行自增;
                //如果没有数据, 建立 {} 结构 push进数组之中;
        var hasGoods = false;
        for(var i = 0 ; i < aCookie.length ; i++){
            //console.log(aCookie[i].id);
            if(this.id == aCookie[i].id){
                //
                aCookie[i].num++;
                hasGoods = true;
                break;
            }
        }

        if(!hasGoods){
            aCookie.push({
                id:this.id,
                num:1
            });
        }
        //3.把数组转换成字符串;
        var sRes = JSON.stringify(aCookie);
        setCookie("goods",sRes);
    }
    console.log(getCookie("goods"))
   
    var sCookie = getCookie("goods");                            
