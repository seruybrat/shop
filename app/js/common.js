// Pop-up

var el = document.getElementById('pop-up');

function popUpOn() {
	el.setAttribute('style', 'display: block;');
};
function popUpOff() {
	el.setAttribute('style', 'display: none;');
};

// Soc-toggle

function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

var socCloseToggle = document.getElementById('soc-toggle');

 function changeClass(btn, cls) {
        if(!hasClass(btn, cls)) {
            addClass(btn, cls);
        } else {
        	removeClass(btn, cls);
        }
    }

var socItemToggle = document.getElementsByClassName('soc__item');

function changeItemClass() {
	if (socItemToggle && socItemToggle.length) {
		for (var i=0; i<socItemToggle.length; i++) {
			 if(!hasClass(socItemToggle[i], "active")) {
	            addClass(socItemToggle[i], "active");
	        } else {
	        	removeClass(socItemToggle[i], "active");
	        }
		}
	} else {
		socCloseToggle.innerText = "Update browser";
	}	
}

// Media

if (window.matchMedia("(max-width: 820px)").matches) {
	var list = document.getElementById('pop-up__inner'),
		listTitle = document.getElementsByClassName('pop-up__title')[0],
		listPrice = document.getElementsByClassName('pop-up__rating')[0],
		listDesc = document.getElementsByClassName('pop-up__desc')[0];
  	  
	listTitle.parentNode.removeChild(listTitle);
	list.insertBefore(listTitle, list.childNodes[0]);

	listPrice.parentNode.removeChild(listPrice);
	list.insertBefore(listPrice, list.childNodes[6]);

	listDesc.parentNode.removeChild(listDesc);
	list.insertBefore(listDesc, list.childNodes[15]);
} 