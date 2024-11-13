'use strict';

const menuSize = '250px';

let open = false; // Alterado para 'false' para manter o menu fechado por padrão

document.addEventListener('DOMContentLoaded', () => { // Adicionado um event listener para o evento 'DOMContentLoaded'
    toggleMenu();
});

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = !open;
    toggleMenu();
});

document.querySelector('#btnClose').addEventListener('click', e => {
    open = false;
    toggleMenu();
});

function toggleMenu() {
    if (open) {
        document.querySelector('#menu').style.marginLeft = 0;
        return;
    }

    document.querySelector('#menu').style.marginLeft = `-${menuSize}`;
}
