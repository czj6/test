window.onload = function(){
	var Ono = document.getElementsByTagName("li");
	var Otext = document.getElementsByTagName("textarea");
	var oul = document.getElementsByTagName("ul")[0];
	var owrap = document.getElementById("cnt-wrap");
	var obtn1 = document.getElementById("btn1");
	var obtn2 = document.getElementById("btn2");
	var obtn3 = document.getElementById("btn3");
	var obtn4 = document.getElementById("btn4");
	var ono = Array.prototype.slice.call(Ono);
	var otext = Array.prototype.slice.call(Otext);
//	obtn4.onclick = function(){
//		localStorage.clear();
//		console.log(localStorage)
//		ono = Array.prototype.slice.call(Ono);
//		otext = Array.prototype.slice.call(Otext);
//		console.log(Ono);
//		console.log(Otext);
//		localStorage.setItem("k",Ono.length);
//		for(var t=0;t<Ono.length;t++)
//		{
//			localStorage.setItem(Ono[t].innerHTML,Otext[t].value);
//		}
//		console.log(localStorage)
//	}
	if(window.localStorage.getItem('NO.1')) {
		
        var len = localStorage.getItem("k");
		console.log(len);
		if(len>ono.length)
		{
			while(len>ono.length)
			{
				add1();
			}
			for(var i=0;i<len;i++)
			{
				var str = "NO."+(i+1);
				otext[i].value = localStorage.getItem(str);
				console.log(localStorage.getItem(str));
			}
		}
		if(len<=ono.length)
		{
			
			while(ono.length!=len){
				
				var temp = ono.length;
				remove2(temp-1);
				
			}
			console.log(ono);
			//ono.length = len;
			for(var i=0;i<len;i++)
			{
				var str = "NO."+(i+1);
				otext[i].value = localStorage.getItem(str);	
			}
		}
		obtn1.onclick = add;
		moveno();
    }
	else
	{
		obtn1.onclick = add;
		moveno();
		console.log(ono);
	}
	function moveno(){
			for(var i = 0;i<ono.length;i++)
			{
				ono[i].index = i;
				ono[i].onclick = function(ev)
				{
					var ev = ev||event;
					for(var j = 0;j<ono.length;j++)
					{
						ono[j].style.backgroundColor = "white";
						console.log(ono[j].index);
						otext[j].style.display = "none";
					}
					ev.target.style.backgroundColor = "#f5f5f5";
					otext[ev.target.index].style.display = "table";
					obtn2.onclick = function remove(){
						console.log(ev.target);
						console.log(ev.target.index);
						otext[ev.target.index].style.display = "none";
						var num = ev.target.index;
						
						owrap.removeChild(otext[num]);
						oul.removeChild(ev.target);
						ono.splice(num,1);
						otext.splice(num,1);
						localStorage.removeItem(ev.target.innerHTML);
		//				console.log(ono.length);
		//				console.log(otext.length)
						for(var j = 0;j<ono.length;j++)
						{
							ono[j].style.backgroundColor = "white";
							otext[j].style.display = "none";
							localStorage.setItem(ono[j].innerHTML,"请输入内容");
						}
						ono[0].style.backgroundColor = "#f5f5f5";
						otext[0].style.display = "table";
						for(var i = 0;i<ono.length;i++)
						{
							ono[i].innerHTML = "NO."+(i+1);
							localStorage.setItem(ono[i].innerHTML,otext[i].value);
							console.log(localStorage.getItem(ono[i].innerHTML));
						}
						localStorage.setItem("k",ono.length);
						console.log(localStorage);
						moveno();
					};
					obtn3.onclick = function change(){
						console.log(otext[ev.target.index]);
						otext[ev.target.index].removeAttribute("readOnly")
						otext[ev.target.index].focus();
						otext[ev.target.index].onblur = function(){
							console.log("kk");
							console.log(this);
							localStorage.setItem(ev.target.innerHTML,this.value);
							console.log(localStorage.getItem(ev.target.innerHTML))
							this.setAttribute("readonly","readonly");
						}
						
		//				otext[ev.target.index].onblur = null;
					}
					console.log(otext);
				}
			}
		}
	function add(){
			var newli = document.createElement("li");
			var newcontent = document.createElement("textarea");
			newli.innerHTML = "NO."+(ono.length+1);
			newli.style.padding = "15px 0px";
			newli.style.display = "inline-block";
			newli.style.textAlign = "center";
			newcontent.style.width = 100+"%";
			newcontent.style.height = 400 + "px";
			newcontent.style.fontSize = 20+"px";
			newcontent.style.color = "#303030";
			newcontent.style.overflow = "hidden";
			newcontent.readOnly = "readonly";
			oul.appendChild(newli);
			owrap.appendChild(newcontent);
			ono.push(newli);
			otext.push(newcontent);
			var n;
			n= 1/ono.length;
			n=n*100;
			console.log(n);
			for(var i=0;i<ono.length;i++)
			{
				ono[i].style.width = n+"%";
			}
			localStorage.setItem(ono[ono.length-1].innerHTML,"请输入内容")
			localStorage.setItem("k",ono.length);
			console.log(localStorage.getItem("k"));
			moveno();
		}
	function add1(){
		var newli = document.createElement("li");
		var newcontent = document.createElement("textarea");
		newli.innerHTML = "NO."+(ono.length+1);
		newli.style.padding = "15px 0px";
		newli.style.display = "inline-block";
		newli.style.textAlign = "center";
		newcontent.style.width = 100+"%";
		newcontent.style.height = 400 + "px";
		newcontent.style.fontSize = 20+"px";
		newcontent.style.color = "#303030";
		newcontent.style.overflow = "hidden";
		newcontent.readOnly = "readonly";
		oul.appendChild(newli);
		owrap.appendChild(newcontent);
		ono.push(newli);
		otext.push(newcontent);
		var n;
		n= 1/ono.length;
		n=n*100;
		console.log(n);
		for(var i=0;i<ono.length;i++)
		{
			ono[i].style.width = n+"%";
		}
		moveno();
	}
	function remove2(num)
	{
//		var newli = document.createElement("li");
//		var newcontent = document.createElement("textarea");
//		newli.innerHTML = "NO."+(ono.length+1);
//		newli.style.padding = "15px 0px";
//		newli.style.display = "inline-block";
//		newli.style.textAlign = "center";
//		newcontent.style.width = 100+"%";
//		newcontent.style.height = 400 + "px";
//		newcontent.style.fontSize = 20+"px";
//		newcontent.style.color = "#303030";
//		newcontent.style.overflow = "hidden";
//		newcontent.readOnly = "readonly";
//		oul.appendChild(newli);
//		owrap.appendChild(newcontent);
		owrap.removeChild(otext[num]);
		oul.removeChild(ono[num]);
		ono.pop();
		otext.pop();
		var n;
		n= 1/num;
		n=n*100;
		for(var i=0;i<ono.length;i++)
		{
			ono[i].style.width = n+"%";
		}
		moveno();
	}
}

