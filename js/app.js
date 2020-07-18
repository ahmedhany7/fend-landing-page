/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let navlist = document.getElementById("navbar__list");
let sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (let section of sections)
{
    let listelement = document.createElement('a');
    listelement.innerText = section.getAttribute("data-nav");
    listelement.setAttribute('href',"#"+section.getAttribute("id"));
    navlist.appendChild(listelement);
}

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", () =>{
    let scrollPos = window.scrollY;

    for (let section of sections)
    {
        let navitem = navlist.querySelector('[href="#'+section.id+'"]');
        let offset = 100;
        if (section.offsetTop -offset <= scrollPos && section.offsetTop + section.offsetHeight-offset > scrollPos) {
            section.classList.add("active");
            navitem.classList.add("active");
        }
        else{
            section.classList.remove("active");
            navitem.classList.remove("active");
        }
    }
});



let navbar = document.getElementsByClassName("navbar__menu")[0];
(function() {        
    let timer;
    document.addEventListener("scroll",function () {
        clearTimeout(timer);
        timer = setTimeout( hidebar , 1000 );

        navbar.style.display = "block";
    });

    let hidebar = function () { 
        // do stuff
        navbar.style.display = "none";
    };

})();

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


