$(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 200) {
        
    	$("nav").css("background-color", "#0dc0c0");
    } else {
       $("nav").css("background-color", "transparent");
    }
});