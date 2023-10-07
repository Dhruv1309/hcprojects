// Scrollbar navbar

let nav = document.querySelector(".navigation-wrapper")
window.onscroll = function(){
    if (document.documentElement.scrollTop > 60 ){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav Hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse")
// when on mobile bootstrap add an show class on the navbar-collapse automatically
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        // removing that show class here
        navCollapse.classList.remove("show");
    })
})

