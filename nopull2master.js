var $ = jQuery;

function merge2master(i, text) {
	return (i === 0 && 'master' === text);
}

function makeBackgroundRed() {
	$('.range-editor .range').css('background-color', 'red');
}

function main() {
	$('.branch-name').each(function(i) {
		if (merge2master(i, $(this).text().trim())) {
			makeBackgroundRed();
		}
	});
}

function watchPage(fn) {
	setInterval(function() {
		fn();
	}, 1000);
}

main();
watchPage(main);