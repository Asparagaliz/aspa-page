// Text

function b64EncodeUnicode(str) {
	return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
		return String.fromCharCode('0x' + p1);
	}));
}

function b64DecodeUnicode(str) {
	return decodeURIComponent(atob(str).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
}

theTales = ['5p+Q5YCL5pmC56m66KOP55qEIEFzcGFyYWdhbGl6IOaIkOmVt+WcqOWNl+Wci+eahOemj+WIqemZou+8jOWcqCA3IOatsuaZguiiq+mkiueItuavjeW4tuWbnuWutu+8jOWcqCAxMyDmrbLnmoTmmYLlgJnlm6DngrrlnLDkuIvpkLXmspnmnpfkuovku7blpLHljrvkuobppIrniLbmr43vvIzmraTlvozkuIDnm7Tnjajoh6rmtYHmtarjgII=',
'5p+Q5YCL5pmC56m66KOP55qEIEFzcGFyYWdhbGl6IOWcqOS4gOmWk+WQjeeCuuOAjOiZjuWwvuiNieOAjeeahOWSluWVoeW7s+mHjOeVtuWls+WDle+8jOS4puaChOaChOeahOWWnOatoeavj+WkqeaUvuWtuOaZgumWk+mDveacg+S+huioqueahOepv+mdm+iXjeiJsuaWueagvOeZvuiktuijmeeahOWls+WtqeWtkOOAgg==',
'5p+Q5YCL5pmC56m66KOP55qEIEFzcGFyYWdhbGl6IOacg+S4gOeoruiuk+iHquW3seeci+i1t+S+hui6q+mrmOiuiumrmOeahOmtlOazle+8jOmAmeiuk+WlueiDveWkoOecgeS4i+iyt+mrmOi3n+mei+eahOmMoueUqOaWvOeNqOiHquS6q+eUqOaxn+axkOWFrOWckueahOWPr+m6l+mkheOAgg==',
'5p+Q5YCL5pmC56m66KOP55qEIEFzcGFyYWdhbGl6IOaOpeWPl+S6huaIkOeCuuiBt+alreWls+auuuaJi+aJgOmcgOimgeeahOWFqOmDqOiok+e3tO+8jOWNu+WcqOWft+ihjOWIuuauuuiLseS/iue0s+Wjq+eahOaVteWci+WkquWtkOeahOS7u+WLmeaZguiIh+WwjeaWueWinOWFpeaEm+ays++8jOW5tuWKq+aMgeS6huengeS6uumjm+apn+iIh+WwjeaWuemAg+WIsOS6huWkquW5s+a0i+S4iueahOS4jeefpeWQjeWwj+WztuOAgg==',
'5p+Q5YCL5pmC56m66KOP55qEIEFzcGFyYWdhbGl6IOWcqOebguiYreebhuevgOmCo+S4gOWkqeiugOWujOS6huS6uumhnueZvOaYjueahOWFqOmDqOeahOaVuOWtl+OAgeespuiZn+WSjOW5vuS9leezu+e1seeahOWFrOW8j+OAgeW9ouW8j+WSjOiuiuaPm+azleWJh++8jOS4puWcqOeJueWIpeS4jeaDs+Wvq+aVuOWtuOS9nOalreeahOmCo+WAi+mAseacq+aKiuiyu+mmrOacgOW+jOWumueQhueahOitieaYjuS6pOe1puS6huiAgeW4q+OAgg==',
'5p+Q5YCL5pmC56m66KOP55qEIEFzcGFyYWdhbGl6IOWwjemCo+WkqeWcqOaVmeWupOi1sOmBk+S4iuaKiuWNiOmkkOeJm+WltueBkeWIsOWlueW2hOaWsOeahOijveacjeijmeS4iueahOeUt+WtqeWtkOaHt+aBqOWcqOW/g++8jOWboOatpOi2geeVoualreemruWQiOeFp+aZguaJgOacieS6uumDveeci+iRl+mPoemgreeahOS4gOeerOmWk+WQu+S6huS7luOAgg==',]

aTaleText = b64DecodeUnicode(theTales[Math.floor(Math.random()*theTales.length)])
document.getElementById('a-tale').innerText = aTaleText
document.getElementById('a-tale-shadow').innerText = aTaleText

// SVG

function setSvgSize(id, width, height) {
	fullVw = document.body.clientWidth
	fullVh = document.body.clientHeight
	// console.log(fullVw, fullVh)
	sizeScale = fullVh / height
	sizeTransformX = (fullVw - width*sizeScale)/sizeScale
	sizeTransformY = (fullVh*1.05 - height*sizeScale)/sizeScale
	svg = document.getElementById(id)
	svg.setAttribute("transform",`scale(${sizeScale}) translate(${sizeTransformX}, ${sizeTransformY})`)
}

function setSvgRender(id, width, height) {
	// First Run to Clone
	if ((document.querySelector(`.svg-${id} .ctn-shadow-inner`))&&(!document.getElementById(id+"-render"))) {
		temp = document.getElementById(id).cloneNode()
		temp.id = temp.id+="-render"
		document.getElementsByTagName("svg")[0].appendChild(temp)
	}
	// Resize
	if (document.querySelector(`.svg-${id} .ctn-shadow-inner`)) {
		setSvgSize(id, width, height)
		setSvgSize(id+"-render", width, height)
		document.querySelector(`.svg-${id} .ctn-shadow-inner`).style.clipPath = `url(#${id}-render)`
		// document.querySelector(`.svg-${id} .ctn-shadow-inner`).style.clipPath = `url(#${id})`
		setTimeout(function(){ document.querySelector(`.svg-${id} .ctn-shadow-inner`).style.clipPath = `url(#${id})` }, 0)
	}
}

function setSvgSizeSets() {
	setSvgRender("aspa1",528.93,637.25)
	// setSvgSize("aspa1-b",528.93,637.25)
	// temp = document.getElementsByTagName("body")[0].classList.toString()
	// document.getElementsByTagName("body")[0].classList = ""
	// document.getElementsByTagName("body")[0].classList = temp
	// document.getElementsByTagName("body")[0].classList += " render" + Math.random()
	// if (document.querySelector(".svg-aspa1 .ctn-shadow-inner")) {
	// 	document.querySelector(".svg-aspa1 .ctn-shadow-inner").style.clipPath = "url(#aspa1-b)"
	// 	setTimeout(function(){ document.querySelector(".svg-aspa1 .ctn-shadow-inner").style.clipPath = "url(#aspa1)" }, 0)
	// }
}

svgRandoms = ["svg-aspa1", "", "", "", ""]
document.getElementsByTagName("body")[0].classList += " " + svgRandoms[Math.floor(Math.random()*svgRandoms.length)]

window.addEventListener('resize', setSvgSizeSets)
// window.requestAnimationFrame(setSvgSizeSets)
setSvgSizeSets()