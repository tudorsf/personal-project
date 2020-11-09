var buttonBurger = document.getElementById("buttonBurger");
var mainMenu = document.getElementById("mainMenu");
var mainNav = document.getElementById("mainNav");
var mainMenuItems = document.getElementById("mainMenu").childNodes;

function setEventMobileMenuLink( menuLink ) {
    for ( var i = 0; i < menuLink.length; i++ ) {
        menuLink[i].addEventListener("click", function() {
            mainNav.classList.remove("main-nav_bg-t");
            mainMenu.classList.remove("menu_showed");
            mainMenu.dataset.menuisvisible = "false";
        });
    }
}

setEventMobileMenuLink( mainMenuItems );

buttonBurger.addEventListener("click", function() {
    if ( mainMenu.dataset.menuisvisible == "false" ) {
        if ( mainNav.dataset.scrolled == "true" ) {
            mainNav.classList.add("main-nav_bg-t");
        }
        mainMenu.classList.add("menu_showed");
        mainMenu.dataset.menuisvisible = "true";
    } else {
        if ( mainNav.dataset.scrolled == "true" ) {
            mainNav.classList.remove("main-nav_bg-t");
        }
        mainMenu.classList.remove("menu_showed");
        mainMenu.dataset.menuisvisible = "false";
    }
});

window.addEventListener("scroll", function() {
    var windowScrolled = window.pageYOffset || document.documentElement.scrollTop;

    if ( windowScrolled > 100 ){
        mainNav.classList.add("main-nav");
        mainNav.dataset.scrolled = "true";
    } else {
        mainNav.classList.remove("main-nav");
        mainNav.dataset.scrolled = "false";
    }
});
