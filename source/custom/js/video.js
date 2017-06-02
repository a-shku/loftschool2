$(document).ready(function() {
    var video = document.getElementById("myVideo");
    video.onended = function() {
        $('.first-video').fadeTo("slow", 0);
    };

});