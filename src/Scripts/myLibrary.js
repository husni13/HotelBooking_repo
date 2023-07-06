export const addClassToElement = (element, className) => {
    const classNames = className.split(" ");
  
    for (let i = 0; i < classNames.length; i++) {
      const singleClassName = classNames[i];
      element.classList.add(singleClassName);
    }
  };
export const appendChildToEl = (parentEl, childEl) => {
    parentEl.appendChild(childEl);
};

export const generateHeader = (title, imgPath) => {

  let headerRootEl = document.getElementById("header-root");

  const headerImgEl = document.createElement("img");

  const headerImgContainer = document.createElement("div");

  headerImgEl.src = imgPath;

  appendChildToEl(headerImgContainer, headerImgEl);

  appendChildToEl(headerRootEl, headerImgContainer);

  addClassToElement(headerImgEl, "header-img");

  addClassToElement(headerImgContainer, "header-img-container");

  const titleContainer = document.createElement("div");

  const headerTextEl = document.createElement("h2");

  const headerSmallTextEl = document.createElement("p");

  headerSmallTextEl.textContent = "The Hard Rock Hotel";

  headerTextEl.textContent = title;

  appendChildToEl(headerRootEl, titleContainer);

  appendChildToEl(titleContainer, headerTextEl);

  appendChildToEl(titleContainer,headerSmallTextEl);

  addClassToElement(titleContainer, "title-container");

  addClassToElement(headerTextEl, "header-text");

  addClassToElement(headerSmallTextEl, "header-text-small");

};

export const generateNavbar = () => {

  let navbarRootEl = document.getElementById("navbar-root");

  let navbarEl = document.createElement("div");

  addClassToElement(navbarEl, "navbar");

  appendChildToEl(navbarRootEl, navbarEl);

  let navbarLogoHolder = document.createElement("div");

  addClassToElement(navbarLogoHolder, "navbar-hotel-name");

  appendChildToEl(navbarEl, navbarLogoHolder);

  let logoImg = document.createElement("img");

  logoImg.src = "Images/hotel-logo.png";

  appendChildToEl(navbarLogoHolder, logoImg);

  let navbarElementsListEl = document.createElement("div");

  addClassToElement(navbarElementsListEl, "navbar-elements-list");

  appendChildToEl(navbarEl, navbarElementsListEl);

  let navbarTabs =[
      {
          tab: "Home",
          link:"index.html"
      },
      {
          tab: "Wellness&Spa",
          link:"wellness&spa.html"
      },
      {
          tab: "Rooms",
          link:"rooms.html"
      },
      {
          tab: "Events",
          link:"promo.html"
      }];

  for(let i = 0; i< navbarTabs.length; i++){
      let navbarListEl = document.createElement("div");

      addClassToElement(navbarListEl, "navbar-element");

      let navbarTabText = document.createElement("h3");

      navbarTabText.textContent = navbarTabs[i].tab;

      appendChildToEl(navbarElementsListEl, navbarListEl);

      appendChildToEl(navbarListEl, navbarTabText);

      navbarTabText.addEventListener("click" , ()=>{
          window.location.href = navbarTabs[i].link;
      });

      let navbarElBox = document.createElement("div");

      appendChildToEl(navbarListEl, navbarElBox);

      addClassToElement(navbarElBox, "navbar-element-box");
  }

  let navbarLanguageContactHolder = document.createElement("div");

  addClassToElement(navbarLanguageContactHolder, "navbar-contact-language");

  appendChildToEl(navbarEl, navbarLanguageContactHolder);

  let navbarLanguage = document.createElement("div");

  addClassToElement(navbarLanguage, "navbar-language");

  appendChildToEl(navbarLanguageContactHolder, navbarLanguage);

  let languageChoiceEl = document.createElement("p");

  languageChoiceEl.textContent = "English";

  appendChildToEl(navbarLanguage, languageChoiceEl);

  let languageIconEl = document.createElement("i");

  languageIconEl.setAttribute("class", "bi bi-globe-americas");

  appendChildToEl(navbarLanguage, languageIconEl);

  let languageListEl = document.createElement("ul");

  appendChildToEl(navbarLanguage, languageListEl);

  addClassToElement(languageListEl, "language-list");

  let languagesListArray = ["Bos/Cro/Ser" , "Español(SA)"];

  for(let i = 0; i < languagesListArray.length; i++){
      let languageListChoiceEl = document.createElement("li");

      languageListChoiceEl.innerHTML = languagesListArray[i];

      appendChildToEl(languageListEl, languageListChoiceEl);

      addClassToElement(languageListChoiceEl, "language-list-item");
  }

  let contactEl = document.createElement("div");

  addClassToElement(contactEl, "navbar-contact-info");

  appendChildToEl(navbarLanguageContactHolder, contactEl);

  let contactText = document.createElement("p");

  contactText.textContent = "Contact";

  appendChildToEl(contactEl, contactText);

  let languageListDisplay = () => {
      languageListEl.classList.toggle("active");

      setTimeout(()=>{
          languageListEl.classList.remove("active");
      },10000);
  };

  languageChoiceEl.addEventListener("click", languageListDisplay);

  languageIconEl.addEventListener("click",languageListDisplay);
  
};