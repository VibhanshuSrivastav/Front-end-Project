// carousel for supplement
let items = document.querySelectorAll('.carousel_01 .carousel-item_01')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
        // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
// carousel for supplement



// animation for header
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 250) {
            $('.header').addClass('change');
        }
        else {
            $('.header').removeClass('change');
        }
    })
})
// animation for header




// animation for cards(programs)


// for card one(transformation)
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >490 && $(window).scrollTop()<700) {
            $('.cardone ').addClass('bounce-in-left');

        }
    })
});


// for card two (weight loss)
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >520 && $(window).scrollTop()<800) {
            $('.cardtwo ').addClass('bounce-in-fwd');
        }
    })
});


// for card three (rejuvenation)
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >520 && $(window).scrollTop()<800) {
            $('.cardthree').addClass('bounce-in-right');
        }
    })
});


// animation for cards(programs)


// animation for headings
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >520 && $(window).scrollTop()<800) {
            $('#programs').addClass('focus-in-contract');
        }
    })
});
// animation for headings

