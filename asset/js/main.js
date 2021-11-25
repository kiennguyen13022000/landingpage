$('.wrapper__item__video').click(function() {
    $(this).find('.wrapper__img__item').hide();
    $('.video__item').each(function() {
        if (!$(this).hasClass('d-none')) {
            var src = $(this).attr('src');
            $(this).attr('src', src);
            $(this).addClass('d-none');
            $(this).next('.wrapper__img__item').show();
        }
    });
    $(this).find('.video__item').removeClass('d-none');
});


var splide = new Splide('#splide__route', {
    type: 'slide',
    perPage: 3,
    gap: 40,
    pagination: false,
    speed: 1000,
    perMove: 1,
    breakpoints: {
        900: {
            gap: 25
        },
        768: {
            perPage: 1,
            fixedWidth: '70%'
        },
        500: {
            perPage: 1,
            fixedWidth: '85%'
        }
    }
});
splide.mount();



new Splide('#splide__lecturers__other', {
    type: 'slide',
    perPage: 2,

    pagination: false,
    speed: 1000,
    perMove: 2,
    breakpoints: {

        768: {
            perPage: 1,

        }
    }
}).mount();



new Splide('#splide__student__review', {
    type: 'slide',
    perPage: 2,

    pagination: false,
    speed: 1000,
    perMove: 2,
    breakpoints: {
        768: {
            perPage: 1,

        }
    }
}).mount();