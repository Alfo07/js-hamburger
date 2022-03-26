//Seleziono tutto il menù
let Menu = document.querySelector('.hamburger-menu')
console.log(Menu);

//Seleziono solo le tre linette
let openMenu = document.querySelector('.fas.fa-bars');
console.log(openMenu);

//Seleziono solo la croce
let closeMenu = document.querySelector('.fas.fa-times');
console.log(closeMenu);

//Al click sulle tre linette si attiva il display-block 
openMenu.addEventListener('click', function(){
    Menu.classList.add('active');
    console.log(Menu)
});

//Al click sulla croce si disattiva il display-block
closeMenu.addEventListener('click', function(){
    Menu.classList.remove('active');
    console.log(Menu)
});