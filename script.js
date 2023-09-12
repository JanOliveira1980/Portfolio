function showMessage() {
    document.querySelector("#html-logo").style.display = 'block'
}
function hideMessage() {
    document.querySelector("#html-logo").style.display = 'none'
}
function showMessage2() {
    document.querySelector("#css-logo").style.display = 'block'
}
function hideMessage2() {
    document.querySelector("#css-logo").style.display = 'none'
}
function showMessage3() {
    document.querySelector("#js-logo").style.display = 'block'
}
function hideMessage3() {
    document.querySelector("#js-logo").style.display = 'none'
}
function showMessage4() {
    document.querySelector("#github-logo").style.display = 'block'
}
function hideMessage4() {
    document.querySelector("#github-logo").style.display = 'none'
}



const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})
