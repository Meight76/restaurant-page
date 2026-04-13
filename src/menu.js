import {contentDiv} from "./index.js";

export function menu() {

    contentDiv.style.alignItems = "center";
    contentDiv.style.justifyContent = "center";

    const divForTable = document.createElement("div");
    divForTable.setAttribute("id", "table-div");

    // create table element

    const table = document.createElement("table");
    table.setAttribute("id", "menu-table");

    // create caption

    const caption = document.createElement("caption");
    caption.textContent = "Menu";

    // create columns

    const tableHeader = document.createElement("thead");

    const nameColumn = document.createElement("th");
    nameColumn.textContent = "Name";
    nameColumn.setAttribute("scope", "col");
    nameColumn.classList.add("column-cell");

    const priceColumn = document.createElement("th");
    priceColumn.textContent = "Price";
    priceColumn.setAttribute("scope", "col");
    priceColumn.classList.add("column-cell");

    const tableHeaderRow = document.createElement("tr");
    tableHeaderRow.appendChild(nameColumn);
    tableHeaderRow.appendChild(priceColumn);

    tableHeader.appendChild(tableHeaderRow);

    const tableBody = document.createElement("tbody");
    tableBody.appendChild(createTr("hamburguer", 9.99));
    tableBody.appendChild(createTr("steak", 19.99));
    tableBody.appendChild(createTr("pasta", 8.99));
    tableBody.appendChild(createTr("soda", 3.99));
    tableBody.appendChild(createTr("pizza", 29.99));
    tableBody.appendChild(createTr("whatever", "free"));



    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    divForTable.appendChild(table);
    contentDiv.appendChild(divForTable);

}

function createTr(...elements) {

    const tr = document.createElement("tr");

    for (const element of elements) {
        const td = document.createElement("td");
        td.textContent = element;
        tr.appendChild(td);
    }
    return tr;
}
