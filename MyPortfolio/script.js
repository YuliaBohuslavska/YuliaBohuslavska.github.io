//modal windows
const modalCards = document.getElementById("modal1");
const modalPiano = document.getElementById("modal2");
const buttonOpenCards = document.getElementById('show-modal-1');
const buttonOpenPiano = document.getElementById('show-modal-2');
const buttonClose = document.getElementsByClassName("modal-close");
const overlay = document.getElementById('overlay-modal')

buttonOpenCards.onclick = function () {
    modalCards.style.visibility = 'visible';
    overlay.style.visibility = 'visible';
};
buttonClose[0].onclick = function () {
    modalCards.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
};

buttonOpenPiano.onclick =  function () {
    modalPiano.style.visibility = 'visible';
    overlay.style.visibility = 'visible';
};
buttonClose[1].onclick = function () {
    modalPiano.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
};

//menu

const menu = document.getElementById('menu');
const menuPic = document.getElementById('menu-pic');
menuPic.onclick = function () {
    if (menu.style.visibility === 'hidden') {
        menu.style.visibility = 'visible'
       // menu.style.background = 'url("https://st2.depositphotos.com/1033941/5450/i/600/depositphotos_54500347-stock-photo-night-starry-sky.jpg")'
    }
    else {
        menu.style.visibility = 'hidden'
    }
}