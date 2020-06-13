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

function createform(){
    const container = document.createElement('div');
    container.className = "container";

    const form = document.createElement('form');

    const fname = document.createElement('label');
    fname.setAttribute("for", "fname");
    fname.innerText = "First Name";

    const fnameInput = document.createElement('input');
    fnameInput.type = "text";
    fnameInput.id = "fname";
    fnameInput.name = "firstname";
    fnameInput.placeholder = "Your name..";

    form.appendChild(fname);
    form.appendChild(fnameInput);

    const lname = document.createElement('label');
    lname.setAttribute("for","lname");
    lname.innerText = "Last Name";

    const lnameInput = document.createElement('input');
    lnameInput.type = "text";
    lnameInput.id = "lname";
    lnameInput.name = "lastname";
    lnameInput.placeholder = "Your last name..";

    form.appendChild(lname);
    form.appendChild(lnameInput);

    const email = document.createElement('label');
    email.setAttribute("for", "email");
    email.innerText = "Email";

    const emailInput = document.createElement('input');
    emailInput.setAttribute("required","");
    emailInput.type = "text";
    emailInput.name = "email";
    emailInput.placeholder = "Enter Email";

    form.appendChild(email);
    form.appendChild(emailInput);

    const subject = document.createElement('label');
    subject.setAttribute("for","subject");
    subject.innerText = "Subject";

    const textarea = document.createElement('textarea');
    textarea.style.height = "200px";
    textarea.id = "subject";
    textarea.name = "subject";
    textarea.placeholder = "Message..";

    form.appendChild(subject);
    form.appendChild(textarea);

    const submit = document.createElement('input');
    submit.type = "submit";
    submit.value = "Submit";
    
    form.appendChild(submit);

    container.appendChild(form);

    return container;

}
function loadContact (){
    const content = document.querySelector('#content');
    
    content.appendChild(head());

    content.appendChild(navbar());

    content.appendChild(createform());

    content.appendChild(foot());

}

export {loadContact}