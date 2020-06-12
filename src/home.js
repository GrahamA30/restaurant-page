function head(){
    const header = document.createElement('div');
    header.className = "header";

    const storeName = "Shake Bar";
    const store = document.createElement('h1');
    store.innerText = storeName;
    
    header.appendChild(store);

    return header;
}

function navbar(){
    const nav = document.createElement('div');
    nav.className = "topnav";

    const home = document.createElement('a');
    home.setAttribute("id","home");
    home.innerText = "home";
    nav.appendChild(home);

    const contact = document.createElement('a');
    contact.setAttribute("id","contact");
    contact.innerText = "contact";
    nav.appendChild(contact);

    const menu = document.createElement('a');
    menu.setAttribute("id","menu");
    menu.innerText = "menu";
    nav.appendChild(menu);

    return nav;
}
function promoDiv(){
    const promo = document.createElement('div');
    promo.id = "promo";

    const headline = document.createElement('div');
    headline.id = "headline";
    const headlineText = "Where the milk is shaken, not stirred";
    headline.innerText = headlineText;

    promo.appendChild(headline);

    return promo;
}
function aboutDiv(){
    const about = document.createElement('div');
    about.id = "about";

    const aboutText = "We've been shaking since 1998."
    const p = document.createElement('p');
    p.innerText = aboutText;
    
    about.appendChild(p);

    return about;
}
function foot(){
    const footer = document.createElement('div');
    footer.className = "footer";

    const link1 = document.createElement('a');
    link1.innerText = "gibber";
    footer.appendChild(link1);

    const link2 = document.createElement('a');
    link2.innerText = "busshh"
    footer.appendChild(link2);

    const link3 = document.createElement('a');
    link3.innerText = "fwefwefw"
    footer.appendChild(link3);

    return footer
}
function loadHome (){
    const content = document.querySelector('#content');
    
    content.appendChild(head());

    content.appendChild(navbar());

    content.appendChild(promoDiv());

    content.appendChild(aboutDiv());

    content.appendChild(foot());

}

export {loadHome}