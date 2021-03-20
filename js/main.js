(function(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");

    $(window).scroll(function() {
        if ($(document).scrollTop() > 70) {
            $('#menu-navbar').addClass('menu-navbar-position');
        }
        else {
            $('#menu-navbar').removeClass('menu-navbar-position');
        }
    });

    output.innerHTML = slider.value;
    slider.oninput = function() {
        output.innerHTML = this.value;
    }
})()