import { contentDiv } from "./index.js";

export function about(){
    const contacts = document.createElement("div");
    contacts.classList.add("contacts");
    contacts.setAttribute("id", "contacts");

    const chefContactDiv = document.createElement("div");
    chefContactDiv.classList.add("contact-item");
    createTag("h1", "Chef", chefContactDiv);
    createTag("p", "Tel: 111-111-111", chefContactDiv);
    createTag("p", "E-mail: chef@example.com", chefContactDiv);


    const ownerContactDiv = document.createElement("div");
    ownerContactDiv.classList.add("contact-item");
    createTag("h1", "Owner", ownerContactDiv);
    createTag("p", "Tel: 111-111-111", ownerContactDiv);
    createTag("p", "E-mail: owner@example.com", ownerContactDiv);

    const waiterContactDiv = document.createElement("div");
    waiterContactDiv.classList.add("contact-item");
    createTag("h1", "Waiter", waiterContactDiv);
    createTag("p", "Tel: 111-111-111", waiterContactDiv);
    createTag("p", "E-mail: waiter@example.com", waiterContactDiv);


    contacts.appendChild(chefContactDiv);
    contacts.appendChild(ownerContactDiv);
    contacts.appendChild(waiterContactDiv);

    contentDiv.appendChild(contacts);
}

function createTag(tag, textInside, node) {
    const element = document.createElement(tag);
    element.textContent = textInside;
    node.appendChild(element);
}
