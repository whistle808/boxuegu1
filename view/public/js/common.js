NProgress.start();

NProgress.done();

$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});
if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
	location.href = '/login';
}
if (location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/view/dashboard/login') {
	var htmlStr = template('tp_aside_tpl', JSON.parse($.cookie('tcInfo')));
	$('.aside>.profile').html(htmlStr);

}