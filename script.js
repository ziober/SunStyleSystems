$(document).ready(function() {
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    });
});
$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 200) {
        $('nav-menu').addClass('custom-banner');
    } else {
        $('nav-menu').removeClass('custom-banner');
    }
});






























