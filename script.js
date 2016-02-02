function rotationAnimation(){
	this.d = 0;
	this.animate = function animate(el, dir){
		var elem = document.getElementById(el);
		var me = this;
		if(dir == "ccw"){this.d--;} else {this.d++;}
		elem.style.WebkitTransform = "rotate("+this.d+"deg)";
		elem.style.MozTransform = "rotate("+this.d+"deg)";
		elem.style.msTransform = "rotate("+this.d+"deg)";
		elem.style.OTransform = "rotate("+this.d+"deg)";
		elem.style.transform = "rotate("+this.d+"deg)";
		if(this.d > 359){
			this.d = 1;
		} else if(this.d < -359){
			this.d = -1;
		}
		setTimeout(function(){me.animate(el,dir);},10);
	}
	
}