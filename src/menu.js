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

function createMenu(){
    const menu = document.createElement('div');

    const table = document.createElement('table');
    const row = document.createElement('tr');
    
    const itemNumber = document.createElement('th');
    itemNumber.innerText = "#";  
    const itemName = document.createElement('th');
    itemName.innerText = "Item";  
    const itemPrice = document.createElement('th');
    itemPrice.innerText = "Price";
    row.appendChild(itemNumber);
    row.appendChild(itemName);
    row.appendChild(itemPrice);
    table.appendChild(row);

    const row1 = document.createElement('tr');  
    const itemNumber1 = document.createElement('td');
    itemNumber1.innerText = "1";  
    const itemName1 = document.createElement('td');
    itemName1.innerText = "Vanilla Milkshake";  
    const itemPrice1 = document.createElement('td');
    itemPrice1.innerText = "$4.00";
    row1.appendChild(itemNumber1);
    row1.appendChild(itemName1);
    row1.appendChild(itemPrice1);
    table.appendChild(row1);

    const row2 = document.createElement('tr');  
    const itemNumber2 = document.createElement('td');
    itemNumber2.innerText = "2";  
    const itemName2 = document.createElement('td');
    itemName2.innerText = "Strawberry Milkshake";  
    const itemPrice2 = document.createElement('td');
    itemPrice2.innerText = "$4.00";
    row2.appendChild(itemNumber2);
    row2.appendChild(itemName2);
    row2.appendChild(itemPrice2);
    table.appendChild(row2);

    const row3 = document.createElement('tr');  
    const itemNumber3 = document.createElement('td');
    itemNumber3.innerText = "3";  
    const itemName3 = document.createElement('td');
    itemName3.innerText = "Chocolate Milkshake";  
    const itemPrice3 = document.createElement('td');
    itemPrice3.innerText = "$4.00";
    row3.appendChild(itemNumber3);
    row3.appendChild(itemName3);
    row3.appendChild(itemPrice3);
    table.appendChild(row3);

    const row4 = document.createElement('tr');  
    const itemNumber4 = document.createElement('td');
    itemNumber4.innerText = "4";  
    const itemName4 = document.createElement('td');
    itemName4.innerText = "Banana Milkshake";  
    const itemPrice4 = document.createElement('td');
    itemPrice4.innerText = "$4.00";
    row4.appendChild(itemNumber4);
    row4.appendChild(itemName4);
    row4.appendChild(itemPrice4);
    table.appendChild(row4);

    menu.appendChild(table);

    return menu;

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
function loadMenu (){
    const content = document.querySelector('#content');
    
    content.appendChild(head());

    content.appendChild(navbar());
    content.appendChild(createMenu());

    content.appendChild(foot());

}

export {loadMenu}