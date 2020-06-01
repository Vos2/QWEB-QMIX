// ___Functions___

// Initializes the page with starter functions
function __init__() {
    navDefault();
    createTestimonialCarousel();
    state = Number(getCookie("nav"));
    switchFocus(state);
}

// sets cookies for the webiste
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Gets the cookie from the browser
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Changes the navigation bar to mobile view
function mobileNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Changes the navigation bar focus to the last on clicked
function switchFocus(state) {
    var focus = ['_home', '_events', '_testimonials', '_contact'];

    for (i = 0; i < 4; i++) {
        $("#" + focus[i]).attr('style', "");
    }
    $("#" + focus[state]).attr('style', "color: wheat !important; font-weight: bold !important;");
}

// Changes the navigation bar to become darker as the user scrolls down the page
function scrollColour() {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    scrollPercent = (s / (c)) * 20;
    var position = scrollPercent / 50;
    $("#titlebar").attr('style', "background: rgba(0, 0, 0, " + position + ");");
    $("#navi").attr('style', "background: rgba(0, 0, 0, " + position + ");");
    $("#logo").attr('style', "opacity: " + position + ";");
}

// Sets the navigation default to black so it can be more easily interacted with
function navDefault() {
    if ($(window).width() < 950) {
        $("#titlebar").attr('style', "background: rgba(0, 0, 0, 1);");
        $("#navi").attr('style', "background: rgba(0, 0, 0, 1);");
        $("#logo").attr('style', "opacity: 1;");
    } else {
        scrollColour();
    }
}

// ___Event Handlers___

// Checks screen size to make sure the nav bar is set properly
window.onresize = function(event) {
    navDefault();
};

// Sets the navigation bar background colour
$(window).scroll(function() {
    if ($(window).width() > 950) {
        scrollColour();



    }
});

// Changes nav bar focus on click
$("a").click(function() {
    x = $(this).data("value");
    if (x !== undefined) {
        state = Number(x);
        switchFocus(state);
        setCookie("nav", state, "7");
    }
});


function createTestimonialCarousel() {
    if ($(window).width() > 950) {
        $(document).ready(function() {
            $('.testimonials-carousel').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true,
                autoplay: true,
                mobileFirst: true,
                swipe: true,
            });

        });
    } else {
        $(document).ready(function() {
            $('.testimonials-carousel').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                mobileFirst: true,
                swipe: true,
            });

        });
    }
}


// $(document).ready(function() {
//     $('.testimonials-carousel').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         arrows: true,
//         autoplay: true,
//         mobileFirst: true,
//         swipe: true,
//     });

// });



// var TESTIMONIALS = document.querySelectorAll(".testimonials-card");
// console.log(TESTIMONIALS)
// var displayedTestimonials = [0, 1, 2];

// function setTestimonials() {
//     for (var i = 0; i < TESTIMONIALS.length; i++) {
//         if (i === displayedTestimonials[0] || i === displayedTestimonials[1] || i === displayedTestimonials[2]) {} else {
//             TESTIMONIALS[i].classList.add("hide");
//         }

//     }
//     for (var i = 0; i < displayedTestimonials.length; i++) {
//         TESTIMONIALS[displayedTestimonials[i]].classList.remove("hide");
//         TESTIMONIALS[displayedTestimonials[i]].classList.add("show-testimonial");
//     }


// }

// function testimonialsLeft() {
//     for (var i = 0; i < 3; i++) {
//         displayedTestimonials[i] = ((displayedTestimonials[i] + 1) == TESTIMONIALS.length) ? 0 : (displayedTestimonials[i] + 1);
//     }
//     setTestimonials();
//     console.log(displayedTestimonials)
// }

// function testimonialsRight() {
//     for (var i = 0; i < 3; i++) {
//         displayedTestimonials[i] = ((displayedTestimonials[i] - 1) < 0) ? (TESTIMONIALS.length - 1) : (displayedTestimonials[i] - 1);
//     }
//     setTestimonials();
//     console.log(displayedTestimonials)
// }

// document.getElementById("testimonials-left").addEventListener("click", testimonialsLeft);
// document.getElementById("testimonials-right").addEventListener("click", testimonialsRight);



// ___Main___
var state;
__init__();