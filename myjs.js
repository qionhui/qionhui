this.Link = document.getElementById("Text");
this.l = 0.00;
this.fx = 0;
function a(){
	if(l >= 80)fx = 1;
	if(l <= 0)fx = 0;
	if(fx == 0)
		l += 0.06;
	else if(fx == 1)
		l -= 0.06;
	Link.style.left = l + "%";
}

setInterval("a()");