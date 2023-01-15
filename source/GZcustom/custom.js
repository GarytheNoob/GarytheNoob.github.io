// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/funny.ico");
		document.title = '==Page Crashed==';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/newtubiao.png");
		document.title = 'Recovered! ' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});