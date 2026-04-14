import "./style.css";
import {homepage, resetContent} from "./homepage.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

// get div by id
export const contentDiv = document.querySelector("#content");

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

homeBtn.addEventListener("click", () => {
    resetContent();
    homepage();
});

menuBtn.addEventListener("click", () => {
    resetContent();
    menu();

});

aboutBtn.addEventListener("click", () => {
    resetContent();
    about();
});
console.log("restaurant has opened");
