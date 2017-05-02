var index=3;
function bianshang(){
	if(index<=1){
		index=3;
	}else{
		index--;
	}
	document.getElementById("zhutu1").src="./img/banner"+index+".jpg";
}
function bianxia(){
	if(index>=3){
		index=1;
	}else{
		index++;
	}
	document.getElementById("zhutu1").src="img/banner"+index+".jpg";
}

function dong1(){
	
	var a=document.getElementById("zhutu1");
	a.src="img/banner1.jpg";
}
function dong2(){
	
	var a=document.getElementById("zhutu1");
	a.src="img/banner2.jpg";
}
function dong3(){

	var a=document.getElementById("zhutu1");
	a.src="img/banner3.jpg";
}
function huantu1(){
	document.getElementById("qq1").src="img/QQ截图20170424222338.png";
}

function huantu2(){
	document.getElementById("qq2").src="img/QQ截图20170424222402.png";

}
function huantu1_1(){
	document.getElementById("qq1").src="img/QQ截图20170424195029.png";
}
function huantu2_2(){
	document.getElementById("qq2").src="img/QQ截图20170424195151.png";
}
function chulai(){
	document.getElementById("zicaidan").style.display="block";
}
function chuqu(){
	document.getElementById("zicaidan").style.display="none";
}
function bianlan1(){
	var div = document.getElementById("op1");
	div.style.backgroundColor = "#21529f";
}
function bianlan2(){
	var div = document.getElementById("op2");
	div.style.backgroundColor = "#21529f";
}
function bianlan3(){
	var div = document.getElementById("op3");
	div.style.backgroundColor ="#21529f";
}



function bianbai1(){
	document.getElementById("op1").style.backgroundColor="#B4B4AA";
	
}
function bianbai2(){
	document.getElementById("op2").style.backgroundColor="#B4B4AA";
	
}
function bianbai3(){
	document.getElementById("op3").style.backgroundColor="#B4B4AA";
	
}
function yikuai(){
	/*documrnt.getElementById("fenzuodi2").style.width="100px";*/
	var div=document.getElementById("fenzuodi2")
	div.style.width="130px";
	var divs=document.getElementById("fenzuodi")
	divs.style.width="160px";
}
function yidong1(){
	var a=document.getElementById("fenzuodi")
	a.style.width="160px";
}
function yichu1(){
	var a=document.getElementById("fenzuodi")
	a.style.width="130px";
}


function erkuai(){
	var div=document.getElementById("fenzuodi")
	div.style.width="130px";
	var div=document.getElementById("fenzuodi2")
	div.style.width="160px";
	
}
function yidong2(){
	var a=document.getElementById("fenzuodi2");
	a.style.width="160px";
}
function yichu2(){
	var a=document.getElementById("fenzuodi2");
	a.style.width="130px";
}
