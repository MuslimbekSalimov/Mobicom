let elButton = document.querySelector(".btn");
let elButtonMenu = document.querySelector(".btn__menu");
let elButtonExit = document.querySelector(".btn__exit");
let elNav = document.querySelector(".nav")

elButton.addEventListener("click", ()=> {
    
    elButtonMenu.classList.toggle("menu__exit")
    elButtonExit.classList.toggle("exit__menu")
    elNav.classList.toggle("nav__blok")
})