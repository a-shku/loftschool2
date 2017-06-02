$(document).ready(function() {
	'use strict'
	//nav
	var links = $('.nav__link');
	
	links.click(function(e) {
		var linkIndex = $(this).data('index');
		$("#maincontent").moveTo(linkIndex);
	});

});