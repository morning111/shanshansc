//获取非行内样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
//完美运动框架
function sport(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//设置开关
		var stop = true; //假设所有对象已达目标
		//遍历对象
		for(var attr in json){
			//获取当前值
			var cur = attr == 'opacity' ? parseInt(parseFloat(getStyle(obj,attr)) * 100) : parseInt(getStyle(obj,attr));
			//计算速度
			var speed = (json[attr] - cur) / 8; //缓冲运动
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//检测对象是否到达目标
			if(cur != json[attr]){
				stop = false;
			}
			//运动
			if(attr == 'opacity'){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = "alpha(opacity=" + (cur + speed) + ')';
			}else{
				obj.style[attr] = cur + speed + "px";
			}
		}
		if(stop){
			clearInterval(obj.timer);
			if(typeof fn == 'function'){
				fn();
			}
		}
	},30);
}
