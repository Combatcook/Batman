$(document).ready(function() {
    let navItem = $('.main-content__navigation-item');

    navItem.on('click', function(event) {
        event.preventDefault();
        let activeItem = $(this).attr('href');
        $('.info-active').toggleClass('info-active');
        $('.actors-active').toggleClass('actors-active');
        if (activeItem == '#actors') {
            $(activeItem).toggleClass('actors-active');
        }
        else {
            $(activeItem).toggleClass('info-active');
        }
        $('.navigation-item-active').toggleClass('navigation-item-active');
        $(this).toggleClass('navigation-item-active');
    });

});