
	function Slider(id){
	this.oDiv = $(id); //获取一个大盒子对象
	//获取ul下的所有li
	this.ullis = $get($get(id,"ul")[0],"li");
	//li的数量
	this.num = this.ullis.length;
	//创建并获取ol下的所有li
	this.ollis = this.createList();
	this.indexA = 0; //记录当前下标
	this.move(this.indexA);
	this.btnLeft = $("ltBtn"); //获取左按钮
	this.btnRigth = $("rtBtn");//获取右按钮
	this.myEvent(); //调用方法
	this.timer = null;
	this.autoPlay();
}
//原型方法
Slider.prototype = {
	createList : function(){
		//创建一个ol对象
		var ol = $create("ol");
		var arrLi = []; //放置所有ol中的li
		for(var i = 0;i < this.num;i ++){
			var li = $create("li"); //创建li
			ol.appendChild(li); //将li追加到ol中
			arrLi.push(li); //将li放到数组中
		}
		this.oDiv.appendChild(ol); //将ol放到div中
		
		//设置左按钮
		//创建一个span
		var spanLeft = $create("span");
		spanLeft.innerHTML = "&lt;";
		spanLeft.id = "ltBtn";
		this.oDiv.appendChild(spanLeft);
		//设置右按钮
		var spanRight = $create("span");
		spanRight.innerHTML = "&gt;";
		spanRight.id = "rtBtn";
		this.oDiv.appendChild(spanRight);
		
		/*//创建放文字的div
		var div = $create("div");
		div.id = "msg";
		this.oDiv.appendChild(div);*/
		
		//返回数组
		return arrLi;
	},
	move : function(index){
		//将所有的ul中的li隐藏，并将所有ol中的li的背景颜色设置为红色
		for(var i = 0;i < this.num;i ++){
			this.ullis[i].style.display = "none";
			this.ollis[i].style.backgroundColor = "#eee";
		}
		//当前ul中li显示，当前ol中li的背景颜色设置为蓝色
		this.ullis[index].style.display = "block";
		this.ollis[index].style.backgroundColor = "#d00";
		//显示div中文字内容
		/*var oDiv = $("msg");
		oDiv.innerHTML = this.ullis[index].firstChild.firstChild.alt;*/
	},
	myEvent : function(){
		var that = this; //记录this
		//给ol中的所有li添加鼠标移入事件
		for(var i = 0;i < this.num;i ++){
			this.ollis[i].index = i; //记录下标
			//添加移入事件
			this.ollis[i].onmouseenter = function(){
				that.indexA = this.index;
				that.move(that.indexA);
			}
		}
		//给左按钮添加点击事件
		this.btnLeft.onclick = function(){
			if(that.indexA > 0){
				that.indexA --;
				that.move(that.indexA);
			}else{
				that.indexA = that.num - 1;
				that.move(that.indexA);
			}
		}
		//给右按钮添加点击事件
		this.btnRigth.onclick = function(){
			if(that.indexA < that.num - 1){
				that.indexA ++;
				that.move(that.indexA);
			}else{
				that.indexA = 0;
				that.move(that.indexA);
			}
		}
	},
	autoPlay : function(){
		
		this.timer = setInterval(function(){
			this.indexA %= this.num;
			this.move(this.indexA);
			this.indexA ++;
		}.bind(this),3000);
		
		//给大div添加一个移入移出事件
		this.oDiv.onmouseover = function(){
			clearInterval(this.timer);
			this.indexA --;
		}.bind(this);
		this.oDiv.onmouseout = function(){
			this.autoPlay();
		}.bind(this);
	}
}

