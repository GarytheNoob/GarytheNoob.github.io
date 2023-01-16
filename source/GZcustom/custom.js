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
