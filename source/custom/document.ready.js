
	//nav
	var links = $('.nav__link');
	
	links.click(function(e) {
		var linkIndex = $(this).data('index');
		$("#maincontent").moveTo(linkIndex);
	});



    var video = document.getElementById("myVideo");
    video.onended = function() {
        $('.first-video').fadeTo("slow", 0);
    };

