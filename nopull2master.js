var $ = jQuery;

function isMerge2master() {
	return window.location.href.indexOf('compare/master...') !== -1;
}

function makeBackgroundRed() {
	$('.range-editor').css('background-color', 'red');
}

function main() {
	if (isMerge2master()) {
		makeBackgroundRed();
	}
}

function watchPage(fn) {
	setInterval(function() {
		fn();
	}, 1000);
}

main();
watchPage(main);