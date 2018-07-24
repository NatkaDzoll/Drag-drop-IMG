    "use strict";

var imgs = document.getElementsByTagName('img');

for (var i = 0; i<imgs.length; i++){
	imgs[i].addEventListener('mousedown', moveByMousedown, false);
	console.log( imgs);
}
var zIndex = 1;

	function moveByMousedown(EO) {		// клик на переносимый объект, начать перенос
		EO = EO || window.event;
		var img = EO.target;
		var posImg = getElemPosition(img)
		var imgClickX = Math.round(EO.pageX - posImg.left);
		var imgClickY = Math.round(EO.pageY - posImg.top);
		img.style.position = 'absolute';
		img.style.zIndex = zIndex;
		moveAt(EO);

		document.onmousemove = function (EO) {		 //отобразить перенос объекта
			moveAt(EO);
		}
        
		function moveAt(EO) {		// изменение координат переносимого объекта
			img.style.left = EO.pageX - imgClickX +'px';
			img.style.top = EO.pageY - imgClickY + 'px';
		}
		
		img.onmouseup = function () {		 // отмена переноса по mouseup
			document.onmousemove = null;
			document.onmouseup = null;
			//document.onmousedown = null;
			zIndex++;
		 }
		  return false;
	}

//найдем положение клика относительно картинки
function getElemPosition(elem) {
	var posImg = elem.getBoundingClientRect();
	return{
		left: posImg.left+window.pageXOffset,
        top: posImg.top+window.pageYOffset
    }
}