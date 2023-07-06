import{ addClassToElement, appendChildToEl, generateNavbar, generateHeader} from "./myLibrary.js"

generateNavbar();

generateHeader("Wellness&Spa", "Images/spa.png");

let wellnessSpaRootEl = document.getElementById("wellness-spa-root");

addClassToElement(wellnessSpaRootEl, "root");

let wrapperEl = document.createElement("div");

appendChildToEl(wellnessSpaRootEl, wrapperEl);

addClassToElement(wrapperEl, "wrapper");

const amenetiesArray = [
    {
        name: "<b>Our Spa Center features include: </b>",
        cssClass: "" 
    },
    {
        name:"Sauna",
        cssClass: `<span class="material-symbols-outlined">
        sauna
        </span>`
    },
    {
        name:"Jacuzzi",
        cssClass: `<span class="material-symbols-outlined">
        hot_tub
        </span>`
    },
    {
        name:"Swimming Pool",
        cssClass: `<span class="material-icons">
        pool
        </span>`
    },
    {
        name:"Gym",
        cssClass: `<span class="material-symbols-outlined">
        fitness_center
        </span>`
    },
    {
        name:"Cold dip barrel",
        cssClass: `<span class="material-symbols-outlined">
        ac_unit
        </span>`
    },
];

let gridContainer = document.createElement("div");

appendChildToEl(wrapperEl, gridContainer);

addClassToElement(gridContainer, "grid-container");

const gridIframeContainer = document.createElement("div");

const gridIframeEl = document.createElement("iframe");

gridIframeEl.src ="https://www.youtube.com/embed/6yY9mR_Oh8k";

addClassToElement(gridIframeContainer, "grid-iframe-container");

appendChildToEl(gridContainer, gridIframeContainer);

appendChildToEl(gridIframeContainer, gridIframeEl);
 
let gridTextContianer = document.createElement("div");

const gridTextTitle = document.createElement("h2");

const gridTextEl = document.createElement("p");

gridTextTitle.textContent = "About our Wellness&Spa";

gridTextEl.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

appendChildToEl(gridContainer, gridTextContianer);

appendChildToEl(gridTextContianer, gridTextTitle);

appendChildToEl(gridTextContianer, gridTextEl);

addClassToElement(gridTextContianer, "grid-text-container");

addClassToElement(gridTextEl, "grid-text");

addClassToElement(gridTextTitle, "grid-title");

let gridListContainer = document.createElement("div");

addClassToElement(gridListContainer, "grid-list-container");

appendChildToEl(gridContainer, gridListContainer);

let gridList = document.createElement("ul");

addClassToElement(gridList, "grid-list");

appendChildToEl(gridListContainer, gridList);

for(let i = 0; i< amenetiesArray.length; i++){

    let listItem = document.createElement("li");

    listItem.innerHTML = amenetiesArray[i].cssClass + amenetiesArray[i].name;

    appendChildToEl(gridList, listItem);

    addClassToElement(listItem, "list-item");
}