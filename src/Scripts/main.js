import{ addClassToElement, appendChildToEl, generateNavbar} from "./myLibrary.js"

generateNavbar();

let mainRootEl = document.getElementById("main-root");

let slideShowContainerEl = document.createElement("div");

appendChildToEl(mainRootEl, slideShowContainerEl);

addClassToElement(mainRootEl, "main-root");

addClassToElement(slideShowContainerEl, "slideshow-container");

let slideshowImgEl = document.createElement("img");

appendChildToEl(slideShowContainerEl, slideshowImgEl);

addClassToElement(slideshowImgEl, "slideshow-img");

let slideShowInfoContainer = document.createElement("div");

let slideShowInfoTextEl = document.createElement("h2");

let slideShowBonusInfoTextEl = document.createElement("p");

let slideShowInfoBtnEl = document.createElement("button");

let infoChevronContainer = document.createElement("div");

let infoIconEl = document.createElement("i");

appendChildToEl(slideShowContainerEl, slideShowInfoContainer);

appendChildToEl(slideShowInfoContainer, slideShowBonusInfoTextEl);

appendChildToEl(slideShowInfoContainer, slideShowInfoTextEl);

appendChildToEl(slideShowInfoContainer, infoChevronContainer);

appendChildToEl(infoChevronContainer, infoIconEl);

appendChildToEl(slideShowInfoContainer, slideShowInfoBtnEl);

addClassToElement(slideShowInfoContainer, "slide-info overlay-animation");

addClassToElement(slideShowInfoTextEl, "slide-title");

addClassToElement(slideShowBonusInfoTextEl, "slide-bonus");

addClassToElement(infoChevronContainer, "chevron-container");

addClassToElement(slideShowInfoBtnEl, "slide-btn");

addClassToElement(infoIconEl, "bi bi-chevron-double-down animate-arrow");

let changeTime = 10000;

let imagesArray = [
{
  src:"Images/Slides/Image1.jpg",
  title:"Hard Rock Hotel",
  subTitle:"Welcome to The",
  btnText: "Explore offers",
  link:"promo.html"
},
{
  src:"Images/Slides/Image2.jpg",
  title:"Book a room",
  subTitle:"Find your true space.",
  btnText: "Book now",
  link:"rooms.html"
},
{
  src:"Images/Slides/Image3.jpg",
  title:"Welness&Spa",
  subTitle:"An oasis for your mind, body, and spirit.",
  btnText: "Learn More",
  link:"wellness&spa.html"
}];

let i = 0;

slideshowImgEl.src = imagesArray[0].src;
slideshowImgEl.style.opacity = "0";


let fadeOut = () => {

  return new Promise((resolve) => {

      slideShowInfoContainer.classList.remove("show");

      setTimeout(() => {
        slideshowImgEl.style.opacity = "0";
      }, 1000);

      setTimeout(() => {
        resolve(); 
      }, 1500);
    });
  };

let fadeIn = () => {

  return new Promise ((resolve) =>{
    
    slideshowImgEl.style.opacity = "1";

    setTimeout(() => {
      slideShowInfoContainer.classList.add("show");
    }, 1500);

    setTimeout(() => {
      resolve();
    }, 500);
  })
   
  };

let updateImage = () => {

  return new Promise((resolve) => {

    slideshowImgEl.src = imagesArray[i].src;
    slideShowInfoTextEl.textContent = imagesArray[i].title;
    slideShowBonusInfoTextEl.textContent = imagesArray[i].subTitle;
    slideShowInfoBtnEl.textContent = imagesArray[i].btnText;

    const btnLink = imagesArray[i].link;

    console.log(btnLink);

    slideShowInfoBtnEl.addEventListener("click", () => {
        window.location.href = btnLink;
    });

    
    if(i < imagesArray.length - 1){
        i++;
    }
    else{
        i = 0;
    }

    setTimeout(() => {
      resolve();
    }, 1000);
  })
};

let slideShow = async () => {
  
    await fadeOut();
    await updateImage();
    await fadeIn();
  };

  setTimeout(() => {
    slideShow();
  
    setInterval(slideShow, changeTime);
  }, 500);