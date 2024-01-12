const openMenu = () => {
    document.querySelector('aside').classList.add('active');
}

const closeMenu = () => {
    document.querySelector('aside').classList.remove('active');
}

document.getElementById('menu').onclick = e => {
    e.preventDefault();
    openMenu();
   
}
document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}
