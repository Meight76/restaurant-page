import "./style.css";
import {homepage, resetContent} from "./homepage.js";
import {menu} from "./menu.js";

// get div by id
export const contentDiv = document.querySelector("#content");

console.log("restaurant has opened");
menu();
