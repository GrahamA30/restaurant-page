import {loadHome} from './home'
import{loadContact} from './contact'

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
function initialLoad(){
    loadHome();
    connectEvents();
}

function connectEvents() {
    const home = document.querySelector('#home');
    const contact = document.querySelector('#contact');

    home.addEventListener('click',displayHome);
    contact.addEventListener('click',displayContact);
}

initialLoad();