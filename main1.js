"use strick"

var imgs = document.getElementsByTagName('img');

for (var i = 0; i<imgs.length; i++){
	imgs[i].addEventListener('mousedown', moveByMousedown, false);
}
var zIndex = 1;

	function moveByMousedown(EO) {// клик на переносимый объект, начать перенос
		EO = EO || window.event;
		var img = EO.target;
		var posImg = getElemPosition(img)
		var imgClickX = Math.round(EO.pageX - posImg.left);
		var imgClickY = Math.round(EO.pageY - posImg.top);
		img.style.position = 'absolute';
		img.style.zIndex = zIndex;
		moveAt(EO);

		document.onmousemove = function (EO) { //отобразить перенос объекта
			
			moveAt(EO);
			moveByMousedown(EO);
		
		}
        
		function moveAt(EO) {
			img.style.left = EO.pageX - imgClickX +'px';
			img.style.top = EO.pageY - imgClickY + 'px';
		}
		
		document.onmouseup = function () {
			document.onmousemove = null;
			document.onmouseup = null;
			zIndex++;
		  }
		  return false;
	//найдем положение клика относительно картинки
	}

function getElemPosition(elem) {
	var posImg = elem.getBoundingClientRect();
	return{
		left: posImg.left+window.pageXOffset,
        top: posImg.top+window.pageYOffset
    }
}




/*
//----------------------------------------------------------------------------------
<div id='IBox' style='background: yellow; width: 200px; height: 200px'></div>
координаты клика: <span id='IInfo'></span>



    "use strict";

    var boxObj=document.getElementById('IBox');
    boxObj.addEventListener("click",boxClicked,false);
    // или boxObj.onclick=boxClicked;

    function boxClicked(EO) {
       
        EO=EO||window.event;
     
        // найдём положение самого жёлтого квадрата относительно страницы
        var boxPos=getElementPos(boxObj);

        var infoObj=document.getElementById('IInfo');
        // найдём координаты клика относительно жёлтого квадрата
        var clickX=Math.round(EO.pageX-boxPos.left);
        var clickY=Math.round(EO.pageY-boxPos.top);
        infoObj.innerHTML="x="+clickX+" y="+clickY;
    }

    function getElementPos(elem) {
        var bbox=elem.getBoundingClientRect();
        return {
            left: bbox.left+window.pageXOffset,
            top: bbox.top+window.pageYOffset
        };
    }

//-----------------------------------------------------
*/