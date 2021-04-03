const menuPic = document.getElementById('menu-pic');
const menu = document.getElementById('menu');
menuPic.onclick = function () {
    if (menu.style.visibility === 'hidden') {
        menu.style.visibility = 'visible'

    }
    else {
        menu.style.visibility = 'hidden'
    }
}