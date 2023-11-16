let elButton = document.querySelector(".btn");
let elButtonMenu = document.querySelector(".btn__menu");
let elButtonExit = document.querySelector(".btn__exit");
let elNav = document.querySelector(".nav")
var elForm = document.querySelector(".form1")
var elInput = document.querySelector(".input1")
var elText = document.querySelector(".valyuta__text")
var elText1 = document.querySelector(".valyuta__text1")
var elText2 = document.querySelector(".valyuta__text2")


var soliq = 100;
var oltioylik = 300;
var onikkioylik = 600;




elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

    var Summa = elInput.value.trim()

    if (Summa * soliq) {
        elText.textContent = Summa * soliq
    }

    if (Summa * oltioylik) {
        elText1.textContent = Summa * oltioylik
    }

    if (Summa * onikkioylik) {
        elText2.textContent = Summa * onikkioylik
    }

})


elButton.addEventListener("click", ()=> {
    
    elButtonMenu.classList.toggle("menu__exit")
    elButtonExit.classList.toggle("exit__menu")
    elNav.classList.toggle("nav__blok")
})