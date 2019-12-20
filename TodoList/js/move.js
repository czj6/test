/**
 * 功能：做匀速运动
 * @param {Object} obj 作用的对象
 * @param {Object} step 步长
 * @param {Object} target  目标长度
 * @param {Object} direction  往哪个方向移动
 * @param {Object} speed  频率，没有的话默认50
 * @param {Object} callback 回调函数
 */
function move(obj, step, target, direction, speed, callback) {
	var speed = speed || 50;
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var temp = parseInt(getstyle(obj, direction)) + step;
		if((temp > target && step > 0) || (temp < target && step < 0)) {
			temp = target;
		}
		if(temp === target) {
			clearInterval(obj.timer);
			callback && callback();
		}
		obj.style[direction] = temp + "px";
	}, speed)
}

function callback() {
	move(obox, -20, 0, "left", 300)
}
/**
 * 功能：获取样式
 * 注意：不要获取复合样式：eg：font，bacoground
 * @param {Object} obj
 * @param {Object} stl
 */
function getstyle(obj, stl) {
	return window.getComputedStyle(obj)[stl] ? window.getComputedStyle(obj)[stl] : obj.currentStyle[stl];
}

 

function waver(obj,direction){
	var arr = new Array();
	var index = 0;
	for(var i = 30;i > 0;i-=3)
	{
		arr.push(i,-i);
	}
	var temp = parseInt(getstyle(obj,direction));
	obj.style[direction] = temp + "px";
	clearInterval(obj.Timer);
	obj.Timer = setInterval(function(){
		obj.style[direction] = parseInt(getstyle(obj,direction)) + arr[index] +"px";
		index++;
		if(index === arr.length)
		{
			clearInterval(obj.Timer);
		}
	},100)
}
