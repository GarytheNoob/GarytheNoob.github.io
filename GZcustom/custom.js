// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
	if (document.hidden) {
		document.title = '==Page Crashed==';
		clearTimeout(titleTime);
	} else {
		document.title = 'Recovered! ' + OriginTitle;
		titleTime = setTimeout(function () {
			document.title = OriginTitle;
		}, 2000);
	}
});


var color_dark = "255,255,255"; var color_light = "0,0,0"; var opacity = '0.8'; var zIndex = "-2"; var count = "200"; var Line_act = function (color) { function o(w, v, i) { return w.getAttribute(v) || i } function j(i) { return document.getElementsByTagName(i) } function l() { var i = j("script"), w = i.length, v = i[w - 1]; return { l: w, z: o(v, "zIndex", -1), o: o(v, "opacity", 0.8), c: o(v, "color", color), n: o(v, "count", 100) } } function k() { r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight } function b() { e.clearRect(0, 0, r, n); var w = [f].concat(t); var x, v, A, B, z, y; t.forEach(function (i) { i.x += i.xa, i.y += i.ya, i.xa *= i.x &gt; r || i.x &lt; 0 ? -1 : 1, i.ya *= i.y &gt; n || i.y &lt; 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1); for (v = 0; v &lt; w.length; v++) { x = w[v]; if (i !== x &amp;&amp; null !== x.x &amp;&amp; null !== x.y) { B = i.x - x.x, z = i.y - x.y, y = B * B + z * z; y &lt; x.max &amp;&amp; (x === f &amp;&amp; y &gt;= x.max / 2 &amp;&amp; (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke()) } } w.splice(w.indexOf(i), 1) }), m(b) } var u = document.createElement("canvas"), s = l(), c = "c_n" + s.l, e = u.getContext("2d"), r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (i) { window.setTimeout(i, 1000 / 45) }, a = Math.random, f = { x: null, y: null, max: 20000 }; u.id = c; u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o; j("body")[0].appendChild(u); k(), window.onresize = k; window.onmousemove = function (i) { i = i || window.event, f.x = i.clientX, f.y = i.clientY }, window.onmouseout = function () { f.x = null, f.y = null }; for (var t = [], p = 0; s.n &gt; p; p++) { var h = a() * r, g = a() * n, q = 2 * a() - 1, d = 2 * a() - 1; t.push({ x: h, y: g, xa: q, ya: d, max: 6000 }) } setTimeout(function () { b() }, 100) };  /* 以下是我自己改的，将上述函数改为声明，在下面选择调用 */ var lord = document.getElementById("color-toggle-icon").getAttribute('data'); if (lord == "light") { Line_act(color_dark); } else { Line_act(color_light); }