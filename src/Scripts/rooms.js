import {addClassToElement, appendChildToEl, generateHeader, generateNavbar} from "./myLibrary.js";

generateNavbar();

generateHeader("Accommodation", "Images/header.jpg");

let roomsRootEl = document.getElementById("rooms-root");

const fetchUrl = "https://localhost:7133/api/HotelBookings/GetAllRooms";

fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {

        let roomsArray = data.Rooms;

        let imagesArray = data.RoomImagePaths;

        roomsArray.map(room => {

                    let slideNum = 0;

                    let thisRoomSlides = imagesArray.filter(x => x.RoomId === room.Id);

                    let roomEl = document.createElement("div");

                    appendChildToEl(roomsRootEl, roomEl);

                    addClassToElement(roomEl,"room-data-container");

                    let roomSlidesContainer = document.createElement("div");

                    let slideImg = document.createElement("img");

                    slideImg.src = thisRoomSlides[0].ImagePath;

                    let slideBtnsContainer = document.createElement("div");

                    let slideBtnLeft = document.createElement("button");

                    let slideBtnRight = document. createElement("button");

                    slideBtnLeft.innerHTML = `<i class="bi bi-chevron-left"></i>`;

                    slideBtnRight.innerHTML = `<i class="bi bi-chevron-right"></i>`;

                    appendChildToEl(slideBtnsContainer, slideBtnLeft);

                    appendChildToEl(slideBtnsContainer, slideBtnRight);

                    addClassToElement(slideBtnsContainer, "btns-container");

                    addClassToElement(slideBtnLeft, "slide-btn");

                    addClassToElement(slideBtnRight, "slide-btn");

                    appendChildToEl(roomEl, roomSlidesContainer);

                    appendChildToEl(roomSlidesContainer, slideBtnsContainer);

                    appendChildToEl(roomSlidesContainer, slideImg);

                    addClassToElement(roomSlidesContainer, "room-slides-container");

                    let roomTextDataContainer = document.createElement("div");

                    let roomTitle = document.createElement("h2");

                    let bedsNumber = document.createElement("p");

                    let priceEl = document.createElement("p");

                    let detailsBtn = document.createElement("button");

                    let redirectToPage = (id) => {
                        const params = new URLSearchParams();
                        
                        params.append("id", id);

                        let url = "roomDetails.html?" + params.toString();

                        window.location.href = url;
                    };

                    detailsBtn.textContent = "Learn more";

                    const roomId = room.Id;

                    detailsBtn.addEventListener("click", () => {
                        redirectToPage(roomId);
                    });


                    appendChildToEl(roomEl, roomTextDataContainer);

                    appendChildToEl(roomTextDataContainer,roomTitle);

                    appendChildToEl(roomTextDataContainer, bedsNumber);

                    appendChildToEl(roomTextDataContainer, priceEl);

                    appendChildToEl(roomTextDataContainer, detailsBtn);

                    addClassToElement(detailsBtn, "details-btn");

                    addClassToElement(roomTextDataContainer, "room-text-data");

                    addClassToElement(roomTitle, "room-title");

                    addClassToElement(bedsNumber, "beds-number");

                    addClassToElement(priceEl, "price");

                    priceEl.textContent = "Price per night: $" + room.NightPrice;

                    roomTitle.textContent = room.RoomName;

                    bedsNumber.textContent = "Number of beds: " + room.BedsNumber;
                
                    const decorEl = document.createElement("div");

                    appendChildToEl(roomTextDataContainer, decorEl);

                    addClassToElement(decorEl, "decor");

                    let slideTo = (direction) => {

                        console.log(slideImg.src);

                        console.log(thisRoomSlides);

                        let offset = direction === "prev" ? "-120%" : "120%";
                    
                        slideImg.style.transform = `translateX(${offset})`;

                        console.log(offset);

                        setTimeout(()=>{
                            slideImg.style.transition = "none";

                            offset = direction === "prev" ? "120%" : "-120%";

                        },350);

                        setTimeout(()=>{

                            slideImg.style.transform = `translateX(${offset})`;

                            setTimeout(()=>{

                                slideNum = direction === "next" ? slideNum = slideNum + 1 : slideNum = slideNum - 1;

                                slideNum = slideNum === -1 ? slideNum = thisRoomSlides.length - 1 : slideNum ;

                                slideNum = slideNum === thisRoomSlides.length ? slideNum = 0 : slideNum ;

                                console.log(slideNum);

                                slideImg.src = thisRoomSlides[slideNum].ImagePath;
                            },100)

                        },350);
                    
                        setTimeout(()=>{

                            slideImg.style.transition = "transform 0.3s ease-in-out";

                            slideImg.style.transform = "translateX(0)";

                        },500);
                    };

                    slideBtnLeft.addEventListener("click", () => slideTo("prev"));

                    slideBtnRight.addEventListener("click", () => slideTo("next"));

                });
        });

