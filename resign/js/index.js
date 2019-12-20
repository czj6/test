var ipt1 = document.getElementById("input1");
var ipt2 = document.getElementById("input2");
var ipt3 = document.getElementById("input3");
var obtn = document.getElementById("btn1");
var obtn2 = document.getElementById("confirm");
var otooltips = document.getElementById("tooltips");
//邮箱正则
var email = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
//密码长度要求9~15位
//密码复杂度   1、不能有重复的字符  2、数字要求在2~8之间 3、可以包含任意大小写字母 必须有三个大写字母  
//必须包含{# & * ？}中的一个
//var rule = /[#,&,?,*][2-8A-Za-z]{9,15}/
var rule = /[#,&,?,*]/g//判断特殊字符
var rule1 = /[A-Z]/g//判断大写字母
var rule2 = /[2-8A-Za-z]/g;//判断数字与字母
var rule3 = /[1,9,0]/g;
//var arr = "?#67392fFs";
obtn.onclick = function(){
	var str1 = ipt1.value;
//	console.log(str1);
	console.log(email.test(str1));
	
	console.log(iptjudge());
	if(email.test(str1)&&iptjudge()&&iptjudge2())
	{
		console.log("323")
		
		otooltips.style.display = "block";
		obtn2.style.border = "1px solid tre";
	}
//	console.log(rule.test(arr));
//	console.log(arr.match(rule2));
//	console.log(judge3());
	//console.log(arr);
}
ipt1.onblur = function(){
	var str1 = ipt1.value;
	if(!email.test(str1))
	{
		alert("邮箱格式不正确");
		ipt1.blur();
	}
}
ipt2.onblur = iptjudge;
ipt3.onblur = iptjudge2;
obtn2.onclick = function(){
	otooltips.style.display = "none";
}
function iptjudge()
{
	var str2 = ipt2.value;
	if(judge2(str2))
	{
		if(judge3(str2))
		{
			if(judge(str2))
			{
				if(judge1(str2))
				{
					if(judge4(str2))
					{
						ipt2.style.borderColor = "#ddd";
						return true;
						
					}
					else
					{
						alert("数字只能在2和8之间");
						ipt2.blur();
						ipt2.style.borderColor = "#ff5b5b";
						return false;
					}
				}
				else
				{
					alert("大写字母必须三个及以上");
					ipt2.blur();
					ipt2.style.borderColor = "#ff5b5b";
					return false;
				}
			}
			else
			{
				alert("特殊字符只能一个");
				ipt2.blur();
				ipt2.style.borderColor = "#ff5b5b";
				return false;
			}
		}
		else
		{
			alert("字符不能重复");
			ipt2.blur();
			ipt2.style.borderColor = "#ff5b5b";
			return false;
		}
		
	}
	else
	{
		alert("密码长度要求在9~15位之间");
		ipt2.blur();
		ipt2.style.borderColor = "#ff5b5b";
		return false;
	}
}
function iptjudge2(){
	var str3 = ipt3.value;
	var str4 = ipt2.value;
	if(str3==str4)
	{
		return true;
	}
	else
	{
		alert("两次填写的密码不一致");
		ipt3.blur();
		return false;
	}
}
function judge(arr){
	console.log(arr.match(rule));
	if(arr.match(rule)===null)
	{
		return false;
	}
	if(arr.match(rule).length ===1)
	{
		return true;
	}
	else{
		return false;
	}
}

function judge2(arr){
	if(arr.length>8&&arr.length<16)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function judge3(arr){
	var arr1 = arr.split('');
	var j;
	for(var i=0;i<arr1.length;i++)
	{
		j=0;
		while(j<arr1.length)
		{
			if(arr1[i]==arr1[j]&&i!=j)
			{
				return false;
			}
			
			j++;
		}
	}
	return true;
}
function judge1(arr){
	console.log(arr.match(rule1));
	if(arr.match(rule1)==null)
	{
		return false;
	}
	if(arr.match(rule1).length >= 3)
	{
		return true;
	}
	else{
		return false;
	}
}
function judge4(arr){
	if(rule3.test(arr))
	{
		return false;
	}
	else
	{
		return true;
	}
}

