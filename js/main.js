(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 70) {
            $('#menu-navbar').addClass('menu-navbar-position');
        }
        else {
            $('#menu-navbar').removeClass('menu-navbar-position');
        }
    });
})()