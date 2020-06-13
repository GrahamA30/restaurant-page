import {loadHome} from './home'
import{loadContact} from './contact'
import{loadMenu} from "./menu"


function displayHome(){
    const content = document.querySelector('#content');
    content.innerHTML = "";
    loadHome();
    connectEvents();
}
function displayContact(){
    const content = document.querySelector('#content');
    content.innerHTML = "";
    loadContact();
    connectEvents();
}
function displayMenu(){
    const content = document.querySelector('#content');
    content.innerHTML = "";
    loadMenu();
    connectEvents();
}

function initialLoad(){
    loadHome();
    connectEvents();
}

function connectEvents() {
    const home = document.querySelector('#home');
    const contact = document.querySelector('#contact');
    const menu = document.querySelector('#menu');

    home.addEventListener('click',displayHome);
    contact.addEventListener('click',displayContact);
    menu.addEventListener('click', displayMenu);
}

initialLoad();