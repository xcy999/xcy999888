var selectedImage = "./img/pp0.jpeg";						
window.onload = function(){
	var m_top = document.getElementById("Top");
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>140){
			m_top.style.position = "fixed";
		}
		else{
			m_top.style.position = "absolute";
		}
	}
	//1、点击缩略图切换大图
	var type1 = document.getElementsByClassName("type1")[0];
	var type2 = document.getElementsByClassName("type2")[0];
	var imagebox = document.getElementsByClassName("imagebox")[0];
	type1.onclick = function(){
		SelectImage(1);
	}
	type2.onclick = function(){
		SelectImage(2);
	}
	//2、点击左右按钮切换大图和缩略图
	var leftbutton = document.getElementsByClassName("leftbutton")[0];
	var rightbutton = document.getElementsByClassName("rightbutton")[0];
	var index = 1;
	leftbutton.onclick = function(){
		if(index >=2){
			index += -1;
		}
		else{
			index = 1;
		}
		SelectImage(index);
	}
	rightbutton.onclick = function(){
		if(index <=1){
			index += 1;
		}
		else{
			index = 2;
		}
		SelectImage(index);
	}
	//3、选择化妆品净含量
	var vvalue1 = document.getElementsByClassName("vvalue1")[0];
	var vvalue2 = document.getElementsByClassName("vvalue2")[0];
	var resultvalue = document.getElementsByClassName("resultvalue")[0];
	var index = 1;
	vvalue1.onclick = function(){
		vvalue1.style.border = "1px solid rgb(255,77,84)";
		vvalue2.style.border = "none";
		vvalue1.getElementsByTagName("span")[0].style.display = "block";
		vvalue2.getElementsByTagName("span")[0].style.display = "none";
		resultvalue.innerHTML = "150ml";
	}
	vvalue2.onclick = function(){
		vvalue2.style.border = "1px solid rgb(255,77,84)";
		vvalue1.style.border = "none";
		vvalue2.getElementsByTagName("span")[0].style.display = "block";
		vvalue1.getElementsByTagName("span")[0].style.display = "none";
		resultvalue.innerHTML = "200ml";
	}
	//4.选择数量
	var nminus = document.getElementsByClassName("nminus")[0];
	var nadd = document.getElementsByClassName("nadd")[0];
	var ntext = document.getElementsByClassName("ntext")[0];
	nminus.onclick = function(){
		if(parseInt(ntext.innerHTML)>=2){
			ntext.innerHTML = parseInt(ntext.innerHTML)-1;
			nminus.style.cursor = "pointer";
		}
		else{
			ntext.innerHTML = 1;
			nminus.style.cursor = "not-allowed";
		}	
	}
	nadd.onclick = function(){
		if(parseInt(ntext.innerHTML)<=4){
			ntext.innerHTML = parseInt(ntext.innerHTML) + 1;
			nadd.style.cursor = "pointer";
		}
		else{
			ntext.innerHTML = 5;
			nadd.style.cursor = "not-allowed";
		}
	}
	//5.点击加入购物车出现遮罩
	var cart = document.getElementsByClassName("cart")[0];
	var overlay = document.getElementById("Overlay");
	cart.onclick = function(){
		overlay.style.display = "block";
		overlay.style.width = document.body.clientWidth + "px";
		overlay.style.height = document.body.clientHeight + document.body.scrollHeight + "px";
		document.body.style.overflow = "hidden";
		var cartadded = document.getElementsByClassName("cartadded")[0];
		cartadded.style["margin-top"] = (document.body.clientHeight - 200)/2 + document.documentElement.scrollTop + "px";
	}
	//6.关闭弹框隐藏遮罩
	var close = document.getElementsByClassName("close")[0];
	close.onclick = function(){
		overlay.style.display = "none";
		document.body.style.overflow = "scroll";
	}
	var tobuy = document.getElementsByClassName("tobuy")[0];
	tobuy.onclick = function(){
		overlay.style.display = "none";
		document.body.style.overflow = "scroll";
	}
	//7.放大镜功能
	var maincontent = document.getElementById("MainContent");
	var imagebox = document.getElementsByClassName("imagebox")[0];
	var bimagebox = document.getElementsByClassName("bimagebox")[0];
	var bigimage = document.getElementsByClassName("bigimage")[0];
	var mark = document.getElementsByClassName("mark")[0];
	var scale = 2;
	imagebox.onmouseout = function(){
		bimagebox.style.display = "none";
		mark.style.display = "none";
	}
	imagebox.onmousemove = function(e){
		var event = e || window.event;
		mark.style.display = "block";
  		var left = event.clientX - maincontent.offsetLeft - imagebox.offsetLeft - mark.offsetWidth/2 ;
  		var top = event.clientY - maincontent.offsetTop - imagebox.offsetTop - mark.offsetWidth/2 ;
  		if(left < 0){left = 0;}
  		else if(imagebox.offsetWidth - left - mark.offsetWidth < 0){
  			left = imagebox.offsetWidth - mark.offsetWidth;
  		}
  		if(top < 0){top = 0;}
  		else if(imagebox.offsetHeight - top - mark.offsetHeight < 0){
  			top = imagebox.offsetHeight - mark.offsetHeight;
  		}
  		mark.style["margin-top"] = top + "px";
  		mark.style["margin-left"] = left + "px";
  		imagebox.style.cursor = "crosshair";
		bimagebox.style.display = "block";
		bigimage.src = selectedImage;
        bigimage.style.width = imagebox.offsetWidth * scale + "px";
        bigimage.style.height = imagebox.offsetHeight * scale + "px";
        bigimage.style.left = -scale * left + "px";
        bigimage.style.top = -scale * top + "px";
	}
}
function SelectImage(index){
  	var lis = document.getElementsByClassName("simagebox")[0].getElementsByTagName("li");
  	var imagebox = document.getElementsByClassName("imagebox")[0];
  	for(var i=0;i<lis.length;i++){
		if(i == index-1){
			lis[i].style.border = "1.5px solid rgb(255,120,0)";
		}
		else{
			lis[i].style.border = "none";
		}
  	} 
  	switch(index){
  		case 1:
  			imagebox.style.background = "url('./img/pp0.jpeg') no-repeat";
  			selectedImage = "./img/pp0.jpeg";
  			break;
  		case 2:
  			imagebox.style.background = "url('./img/pp1.jpeg') no-repeat";
  			selectedImage = "./img/pp1.jpeg";
  			break;
  	}
}