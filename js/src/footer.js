function footerPosition(){
	let contentHeight = document.body.scrollHeight,//网页正文全文高度
		headBand = document.querySelector(".headband").offsetHeight;
		mainHeight = document.querySelector(".main").offsetHeight;
		footerHeight = document.querySelector(".footer").offsetHeight;
		winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
	if(winHeight - headBand - mainHeight > footerHeight){
		document.querySelector(".footer").classList.add("fixed-bottom")
	}
}
footerPosition();