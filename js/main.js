/* menu stuff */
/* set isShow bool */
let isShow = false;
/* select everything */

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const menuItems = document.querySelectorAll(".nav-item");

/* add close and show classes to menu stuff dynamically when the button is clicked. */
menuBtn.addEventListener("click", ()=>{
     if (!isShow) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        menuItems.forEach(
            element => {
                element.classList.add("show");
            }    
        )
        isShow = true;
     }  else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        menuItems.forEach(
            element => {
                element.classList.remove("show");
            }
        )
        isShow = false;
     }
})

