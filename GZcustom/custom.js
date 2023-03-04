// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
	if (document.hidden) {
		document.title = 'GarytheNoob\'s Blog';
		clearTimeout(titleTime);
	} else {
		document.title = 'Welcome Back! ' + OriginTitle;
		titleTime = setTimeout(function () {
			document.title = OriginTitle;
		}, 2000);
	}
});
<link rel="stylesheet" href="/css/spoiler.css" type="text/css"><script src="/js/spoiler.js" type="text/javascript" async></script>