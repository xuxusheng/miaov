var level_1;
var level_2;


window.onload = function(){
	var aP = document.getElementsByClassName("ap")
	for (var i=0; i<aP.length; i++){
		aP[i].addEventListener('click',function(){
			var nextUl = this.nextSibling;
			var now = getStyle(nextUl,display);
			if(now == 'none'){
				nextUl.style.display = 'none';
			}else{
				nextUl.style.display = 'block';
			}
		})
	}
}



function getStyle(obj,attr,value){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return obj.getComputedStyle(obj,false)[attr];
	}
}