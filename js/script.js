$(document).ready(function() {
    $('.owl-carousel').owlCarousel();

    $('a[href*=\\#]').click(function(event) {
        $('html, body').animate(
            {
                scrollTop: $($.attr(this, 'href')).offset().top
            },
            500
        );
        event.preventDefault();
    });
});
