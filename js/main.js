const btn_menu = document.querySelector('#btn-click-menu');
const menu = document.querySelector('#header-nav-hidden');
const btn_remove_menu = document.querySelector('#btn-remove-menu');

btn_menu.addEventListener('click', (e)=>{
    e.preventDefault();
    menu.classList.add('show-menu');
    (menu.style.right == "-200px") ? menu.style.right = "0" : menu.style.right = "-200px";
})
btn_remove_menu.addEventListener('click', (e)=>{
    e.preventDefault()
    menu.classList.remove('show-menu')
    (menu.style.right == "-200px") ? menu.style.right = "0" : menu.style.right = "-200px";
})