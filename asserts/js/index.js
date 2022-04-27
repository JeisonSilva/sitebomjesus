const botaoMenu = document.querySelector('.cabecalho__toolbar__menu');
const menuLateral = document.querySelector('.menu__lateral');
var menuAberto = false;

botaoMenu.addEventListener('click', ()=>{
    menuLateral.classList.toggle('menu__lateral--aberto')
})