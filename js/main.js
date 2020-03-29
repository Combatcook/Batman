$(document).ready(function() {
    let navItem = $('.main-content__navigation-item');

    navItem.on('click', function(event) {
        event.preventDefault();
        let activeItem = $(this).attr('href');
        $('.section--active').toggleClass('section--active');
        $('.section--actors--active').toggleClass('section--actors--active');
        if (activeItem == '#actors') {
            $(activeItem).toggleClass('section--actors--active');
        }
        else {
            $(activeItem).toggleClass('section--active');
        }
        $('.navigation-item--active').toggleClass('navigation-item--active');
        $(this).toggleClass('navigation-item--active');
    });

    $('.search__button').on('click', function(event) {
        event.preventDefault();
    });

    $('.form-email__button').on('click', function(event) {
        event.preventDefault();
    });

});