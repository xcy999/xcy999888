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
	//1、鼠标进入按钮渐显
	var btn_former = document.getElementsByClassName("former")[0];
	var btn_next = document.getElementsByClassName("next")[0];
	var i = 0,j = 1;
	var emerge_Interval,disappear_Interval,img_Interval,bd_Interval;
	document.getElementById("ImgBox").onmouseenter = function(){
		emerge_Interval = setInterval(Emerge,50);
	};
	function Emerge(){
		btn_former.style.display = "block";
		btn_next.style.display = "block";
		i += 0.2;
		btn_former.style.opacity = i;
		btn_next.style.opacity = i;
		if(i>=1){
			clearInterval(emerge_Interval);
			i=0;
		}
	}
	//2.鼠标离开按钮渐隐
	document.getElementById("ImgBox").onmouseleave = function(){
		disappear_Interval = setInterval(Disappear,50);
	};
	function Disappear(){
		j += -0.2;
		btn_former.style.opacity = j;
		btn_next.style.opacity = j;
		if(j<=0){
			clearInterval(disappear_Interval);
			j=1;
		}
	}
	//3.自动轮播
	var images = document.getElementsByClassName("images")[0];
	img_Interval = setInterval(slide,3000);
	Roll(1);
	function slide(){
		if(parseInt(images.style["margin-left"])>-802*5){
			images.style["margin-left"] = parseInt(images.style["margin-left"]) - 802 + "px";
			images.style.transition = "margin-left 1s";
			Roll(-Math.round(parseInt(images.style["margin-left"])/802)+1);
		}
		else{
			Roll(1);
			images.style["margin-left"] = "0px";
			images.style.transition = "margin-left 1s";
		}
	}

	var imageBox = document.getElementById("ImgBox");
	imageBox.onmouseover = function(){
  		clearInterval(img_Interval)
	}

	imageBox.onmouseout = function(){
  		img_Interval = setInterval(slide,3000);
	}
	//4.点击左右按钮切换图片
	var index = 1;
	btn_former.onclick = function(){
		if(index==1){
			index=6
		}
		else{
			index = index -1;
		}
		ShowImage(index);
	}
	btn_next.onclick = function(){
		if(index==6){
			index=1
		}
		else{
			index = index +1;
		}
		ShowImage(index);
	}
	//5.点击圆形按钮切换图片
	var lis = document.getElementsByClassName("btindex");
	for(var i=0;i<lis.length;i++){
		lis[i].index = i+1;
		lis[i].onclick = function(){
			ShowImage(this.index);
			index = this.index;
		}
	}
	//5、公告栏滚动
	var bbody = document.getElementsByClassName("bbody")[0];
	var bbody1 = document.getElementsByClassName("bbody1")[0];
	var bbody2 = document.getElementsByClassName("bbody2")[0];
	bbody2.innerHTML = bbody1.innerHTML;
	function scroll(){
		if(bbody.scrollTop >= bbody1.offsetHeight){
			bbody.scrollTop = 0;
		}
		else{
			bbody.scrollTop = bbody.scrollTop + 1;
		}
	}
	bd_Interval = setInterval(scroll,50);
	bbody.onmouseover = function(){
		clearInterval(bd_Interval);
	}
	bbody.onmouseout = function(){
		bd_Interval = setInterval(scroll,50);
	}
	//6.话费充值金额变动
	var chargeselect = document.getElementsByClassName("chargeselect")[0];
	var chargeresult = document.getElementsByClassName("chargeresult")[0];
	chargeselect.onchange = function(){
		chargeresult.innerHTML = "¥" + chargeselect.options[chargeselect.selectedIndex].value;
	}
	//7.侧栏二维码按钮鼠标移入显示大号二维码，隐藏小号二维码
	var tool3 = document.getElementsByClassName("tool3")[0];
	tool3.onmouseover = function(){
		var t3img2 = document.getElementsByClassName("t3img2")[0];
		t3img2.style.display = "none";
		var t3img3 = document.getElementsByClassName("t3img3")[0];
		t3img3.style.display = "block";
	}
	tool3.onmouseout = function(){
		var t3img2 = document.getElementsByClassName("t3img2")[0];
		t3img2.style.display = "block";
		var t3img3 = document.getElementsByClassName("t3img3")[0];
		t3img3.style.display = "none";
	}
	//8.点击最后一个商品跳转到详情页
	var detail = document.getElementsByClassName("detail")[0];
	detail.onclick = function(){
		window.location.href = "details.html";
	}

}

function ShowImage(index){
	var images = document.getElementsByClassName("images")[0];
	images.style["margin-left"] = -802*(index-1) + "px";
    Roll(index);
}

function Roll(index){
  	var lis = document.getElementsByClassName("btindex");
  	for(var i=0;i<lis.length;i++){
		if(i == index-1){
			lis[i].style.background = "rgb(255,120,0)";
		}
		else{
			lis[i].style.background = "rgb(232,232,232)";
		}
  	} 
}