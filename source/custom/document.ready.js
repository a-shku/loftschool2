
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJ2aWRlby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRvY3VtZW50LnJlYWR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdC8vbmF2XG5cdHZhciBsaW5rcyA9ICQoJy5uYXZfX2xpbmsnKTtcblx0XG5cdGxpbmtzLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIgbGlua0luZGV4ID0gJCh0aGlzKS5kYXRhKCdpbmRleCcpO1xuXHRcdCQoXCIjbWFpbmNvbnRlbnRcIikubW92ZVRvKGxpbmtJbmRleCk7XG5cdH0pO1xuXG4iLCJcbiAgICB2YXIgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VmlkZW9cIik7XG4gICAgdmlkZW8ub25lbmRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuZmlyc3QtdmlkZW8nKS5mYWRlVG8oXCJzbG93XCIsIDApO1xuICAgIH07XG5cbiJdfQ==
