// ___Functions___

// Initializes the page with starter functions
function __init__(){
    navDefault();
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
function switchFocus(state){
    var focus = ['_home', '_events', '_testimonials', '_contact'];

    for (i = 0; i < 4; i++){
        $("#" + focus[i]).attr('style', "");
    }
    $("#" + focus[state]).attr('style', "color: wheat !important; font-weight: bold !important;");
}

// Changes the navigation bar to become darker as the user scrolls down the page
function scrollColour(){
    var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();
            scrollPercent = (s / (c)) * 20;
            var position = scrollPercent/50;
    $("#titlebar").attr('style', "background: rgba(0, 0, 0, " + position + ");");
    $("#navi").attr('style', "background: rgba(0, 0, 0, " + position + ");");
    $("#logo").attr('style', "opacity: " + position + ";");
}

// Sets the navigation default to black so it can be more easily interacted with
function navDefault(){
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
$(window).scroll(function () {
    if ($(window).width() > 950) {
        scrollColour();
    }
});

// Changes nav bar focus on click
$("a").click(function(){
    x = $(this).data("value");
    if (x !== undefined){
        state = Number(x);
        switchFocus(state);
        setCookie("nav", state, "7");
    }
});

// ___Main___
var state;
__init__();  