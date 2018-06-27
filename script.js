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

function setSVGsize(id, width, height) {
	sizeScale = document.body.clientHeight / height
	sizeTransformX = (document.body.clientWidth - width*sizeScale)/sizeScale
	sizeTransformY = document.body.clientHeight * 0.05
	svg = document.getElementById(id)
	svg.setAttribute("transform",`scale(${sizeScale}) translate(${sizeTransformX}, ${sizeTransformY})`)
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

function setSVGsizeSets() {
	setSVGsize("aspa1",528.93,637.25)
}
window.addEventListener('resize', setSVGsizeSets)
setSVGsizeSets()

svgRandoms = ["svg-aspa1", "", "", "", ""]
document.getElementsByTagName("body")[0].classList += svgRandoms[Math.floor(Math.random()*svgRandoms.length)]