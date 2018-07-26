    "use strict";

var imgs = document.getElementsByTagName('img');
var zIndex = 1;

for (var i = 0; i<imgs.length; i++){
	imgs[i].addEventListener('mousedown', moveByMousedown, false);
}


function moveByMousedown(EO) {	// клик на переносимый объект, начать перенос
	EO = EO || window.event;
	
	if (EO.which == '1') {
		var img = EO.target;
		var posImg = getElemPosition(img)
		var imgClickX = Math.round(EO.pageX - posImg.left);
		var imgClickY = Math.round(EO.pageY - posImg.top);
		img.style.position = 'absolute';
		img.style.zIndex = zIndex;
	}

	document.onmousemove = function (EO) {	 //отобразить перенос объекта
		moveAt(EO);
		changeCursor();
		return false;
	}

	function changeCursor() {  // стилизация курсора при mousedown
		document.body.style.cursor = 'move';
	}

	function moveAt(EO) {		// изменение координат переносимого объекта
		//window.event.stopPropagation();
		img.style.left = EO.pageX - imgClickX +'px';
		img.style.top = EO.pageY - imgClickY + 'px';
	}
	
	img.onmouseup = function () {		 // отмена переноса по mouseup
		document.onmousemove = null;
		document.onmouseup = null;
		document.body.style.cursor = 'default';
		zIndex++;
	 }
}

//найдем положение клика относительно картинки
function getElemPosition(elem) {
	var posImg = elem.getBoundingClientRect();
	return{
		left: posImg.left+window.pageXOffset,
        top: posImg.top+window.pageYOffset
    }
}