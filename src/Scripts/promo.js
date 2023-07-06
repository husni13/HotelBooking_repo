import {addClassToElement, appendChildToEl, generateHeader, generateNavbar} from "./myLibrary.js";

generateNavbar();

generateHeader("Latest events", "Images/header.jpg");

let promoRootEl = document.getElementById("promo-root");

let promoOffersGridContainer = document.createElement("div");

appendChildToEl(promoRootEl, promoOffersGridContainer);

addClassToElement(promoOffersGridContainer, "promo-grid-container");

const fetchUrl = "https://localhost:7133/api/HotelBookings/GetAllPromoOffers";

fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {
        data.map(offer => {

            let promoOfferEl = document.createElement("div");

            appendChildToEl(promoOffersGridContainer, promoOfferEl);

            addClassToElement(promoOfferEl, "promo-offer");

            let promoOfferImgContainer = document.createElement("div");

            appendChildToEl(promoOfferEl, promoOfferImgContainer);

            addClassToElement(promoOfferImgContainer, "promo-img-container");

            let promoOfferImg = document.createElement("img");

            promoOfferImg.src = offer.ImagePath;

            appendChildToEl(promoOfferImgContainer, promoOfferImg);

            let promoOfferTitleContainer = document.createElement("div");

            addClassToElement(promoOfferTitleContainer, "offer-title-container");

            appendChildToEl(promoOfferEl, promoOfferTitleContainer);

            let promoOfferTitle = document.createElement("h2");

            promoOfferTitle.textContent = offer.OfferTitle;

            appendChildToEl(promoOfferTitleContainer, promoOfferTitle);

            let promoOfferDescriptionContianer = document.createElement("div");

            let promoOfferDescription = document.createElement("p");

            promoOfferDescription.textContent = offer.Description;

            appendChildToEl(promoOfferEl, promoOfferDescriptionContianer);

            appendChildToEl(promoOfferDescriptionContianer, promoOfferDescription);

            addClassToElement(promoOfferDescriptionContianer, "description-container");

            let offerBtn = document.createElement("div");

            addClassToElement(offerBtn, "offer-btn");

            appendChildToEl(promoOfferEl, offerBtn);

            const btnText = document.createElement("p");

            appendChildToEl(offerBtn, btnText);

            addClassToElement(btnText, "offer-btn-text");

            btnText.textContent = "Details";

            let promoOfferBox = document.createElement("div");

            appendChildToEl(promoOfferEl, promoOfferBox);

            addClassToElement(promoOfferBox, "promo-box");
        })
    });

