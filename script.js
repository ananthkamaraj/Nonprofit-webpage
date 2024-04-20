var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;

	if (currentScrollPos==0) {
        document.getElementById("navbar").style.backgroundColor = "transparent";
		document.getElementById("navbar").style.boxShadow = "0 0 0 0";
	}

	else{
        document.getElementById("navbar").style.backgroundColor = "black";

		document.getElementById("navbar").style.boxShadow = "0px 0px 8px 0px";
	}

  	prevScrollpos = currentScrollPos;
}

var btn = $('#back-to-top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});