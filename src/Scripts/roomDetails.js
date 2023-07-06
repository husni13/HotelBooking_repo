import {addClassToElement, appendChildToEl, generateHeader, generateNavbar} from "./myLibrary.js";

generateNavbar();

let urlParams = new URLSearchParams(window.location.search);

let roomId = urlParams.get("id") || localStorage.getItem("room-id");

localStorage.setItem("room-id", roomId.toString());

let rootEl = document.getElementById("room-details-root");

const fetchUrl = 
"https://localhost:7133/api/HotelBookings/GetRoomById/" 
+ roomId;

fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {

        generateHeader(data.Room.RoomName, "Images/header.jpg");

        const roomData = data.Room;

        const roomImages = data.Images

        let pageContainer = document.createElement("div");

        let roomSlidesContainer = document.createElement("div");

        appendChildToEl(rootEl, pageContainer);

        appendChildToEl(pageContainer, roomSlidesContainer);

        addClassToElement(roomSlidesContainer, "slides-container")

        for(let i = 0; i < roomImages.length ; i++){
            const slide = document.createElement("img");

            slide.src = roomImages[i].ImagePath;

            if(i===0){
                addClassToElement(slide, "slide-show");
            }else{
                addClassToElement(slide, "slide-no-show");
            }

            appendChildToEl(roomSlidesContainer, slide);
        }

        let current = 0;
        const slides = roomSlidesContainer.querySelectorAll("img");

        let switchSlide = (slide, smallOrSlide) => {
            if(smallOrSlide === "small"){

                if(current != slide){
                    slides[slide].classList.remove("slide-no-show");
                    slides[slide].classList.add("slide-show");

                    slides[current].classList.remove("slide-show");
                    slides[current].classList.add("slide-no-show");

                    current = slide;
                }

            } else if(smallOrSlide === "slide"){

                slides[current].classList.remove("slide-show");
                slides[current].classList.add("slide-no-show");

                current = current === slides.length - 1 ? current = 0 : current = current + 1;

                slides[current].classList.remove("slide-no-show");
                slides[current].classList.add("slide-show");
            }
        };

        const nextBtn = document.createElement("button");

        appendChildToEl(roomSlidesContainer, nextBtn);

        addClassToElement(nextBtn, "slide-btn");

        nextBtn.innerHTML = `<i class="bi bi-chevron-double-left"></i>`;

        nextBtn.addEventListener("click", () => switchSlide(0, "slide"));

        let smallImagesContainer = document.createElement("div");

        appendChildToEl(pageContainer, smallImagesContainer);

        addClassToElement(smallImagesContainer, "small-img-container");

        for(let i = 0; i < roomImages.length ; i++){

            let smallImg = document.createElement("img");

            appendChildToEl(smallImagesContainer, smallImg);

            addClassToElement(smallImg, "small-img");

            smallImg.src = roomImages[i].ImagePath;

            smallImg.addEventListener("click", ()=>switchSlide(i, "small"));
            
        }

        const roomDataContainer = document.createElement("div");

        appendChildToEl(pageContainer, roomDataContainer);

        addClassToElement(roomDataContainer, "data-container");

        const listContainerLeft = document.createElement("div");

        const listEl = document.createElement("ul");

        const listElArray = [
            {
                name:"Description",
                ref: "desc"
            },
            {
                name:"Details",
                ref:"det"
            },
            {
                name: "Payment info",
                ref: "pay"
            }
        ];

        addClassToElement(listEl, "list");

        for(let x = 0; x < listElArray.length; x++){
            const listItem = document.createElement("li");

            listItem.textContent = listElArray[x].name;

            let reference = listElArray[x].ref;

            appendChildToEl(listEl, listItem);
            addClassToElement(listItem, "list-item");

            listItem.addEventListener("click", () => {
                let changeDiv = changableRight.querySelectorAll("div");

                switch(reference){
                    case "desc" :
                        changeDiv[0].classList.remove("no-show");
                        changeDiv[1].classList.add("no-show");
                        changeDiv[2].classList.add("no-show");
                    break;
                    case "det" : 
                        changeDiv[0].classList.add("no-show");
                        changeDiv[1].classList.remove("no-show");
                        changeDiv[2].classList.add("no-show");
                    break;
                    case "pay" : 
                        changeDiv[0].classList.add("no-show");
                        changeDiv[1].classList.add("no-show");
                        changeDiv[2].classList.remove("no-show");
                        break;

                    default: 
                    break;
                }

            });
        }

        const changableRight = document.createElement("div");

        addClassToElement(changableRight, "change-right");

        const descriptionContainer = document.createElement("div");
        
        const roomPriceBedsContainer = document.createElement("div");

        const paymentInfoContainer = document.createElement("div");
        addClassToElement(paymentInfoContainer, "payment-container");


        appendChildToEl(roomDataContainer, listContainerLeft);
        appendChildToEl(listContainerLeft, listEl);

        appendChildToEl(roomDataContainer, changableRight);
        appendChildToEl(changableRight, descriptionContainer);
        appendChildToEl(changableRight, roomPriceBedsContainer);
        appendChildToEl(changableRight, paymentInfoContainer);

        const description = document.createElement("p");

        description.textContent = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        `;

        appendChildToEl(descriptionContainer, description);
        addClassToElement(descriptionContainer, "desc-container");
        addClassToElement(description, "desc");

        const price = document.createElement("p");

        console.log(roomData);

        price.textContent = "Price per night: $" + roomData.NightPrice;

        const beds = document.createElement("p");

        beds.textContent = "Number of beds: " + roomData.BedsNumber;

        appendChildToEl(roomPriceBedsContainer, price);
        appendChildToEl(roomPriceBedsContainer, beds);

        addClassToElement(beds, "beds-price");
        addClassToElement(price, "beds-price");

        addClassToElement(roomPriceBedsContainer, "price-beds-container");
        addClassToElement(roomPriceBedsContainer, "no-show");

        const paymentInfo = document.createElement("p");

        paymentInfo.innerHTML = `<ul class="payment"><li>Credit Card <i class="bi bi-credit-card"></i></li><li>PayPal <i class="bi bi-paypal"></i></li></ul>`

        appendChildToEl(paymentInfoContainer, paymentInfo);
        addClassToElement(paymentInfo, "payment");

        addClassToElement(paymentInfoContainer, "no-show");

        let bookingFormContainer = document.createElement("div");

        addClassToElement(bookingFormContainer, "booking-container");

        let bookingForm = document.createElement("form");
        
        addClassToElement(bookingForm, "booking-form")

        appendChildToEl(rootEl, bookingFormContainer);
        appendChildToEl(bookingFormContainer, bookingForm);

        const nameLabel = document.createElement("label");

        nameLabel.textContent = "Full Name: ";

        let nameInput = document.createElement("input");

        nameInput.type = "text";
        nameInput.name = "name";
        nameInput.required = true;

        appendChildToEl(bookingForm, nameLabel);
        appendChildToEl(bookingForm, nameInput);

        const numberLabel = document.createElement("label");

        numberLabel.textContent = "Phone number: ";

        let numberInput = document.createElement("input");

        numberInput.type = "text";
        numberInput.name = "phone";
        numberInput.required = true;

        appendChildToEl(bookingForm, numberLabel);
        appendChildToEl(bookingForm, numberInput);


        const mailLabel = document.createElement("label");

        mailLabel.textContent = "E-mail: ";

        let mailInput = document.createElement("input");

        mailInput.type = "email";
        mailInput.name = "email";
        mailInput.required = true;

        appendChildToEl(bookingForm, mailLabel);
        appendChildToEl(bookingForm, mailInput);
        
        const arrivalDateLabel = document.createElement("label");

        arrivalDateLabel.textContent = "Date of arrival: ";

        let arrivalDateInput = document.createElement("input");

        arrivalDateInput.type = "date";
        arrivalDateInput.name = "arrival";
        arrivalDateInput.required = true;

        appendChildToEl(bookingForm, arrivalDateLabel);
        appendChildToEl(bookingForm, arrivalDateInput);

        const departureDateLabel = document.createElement("label");

        departureDateLabel.textContent = "Date of departure: ";

        let departureDateInput = document.createElement("input");

        departureDateInput.type = "date";
        departureDateInput.name = "departure";
        departureDateInput.required = true;

        addClassToElement(departureDateInput, "date-input");
        addClassToElement(arrivalDateInput, "date-input");

        appendChildToEl(bookingForm, departureDateLabel);
        appendChildToEl(bookingForm, departureDateInput);

        let submitBtn = document.createElement("button");

        submitBtn.textContent = "Book Now";

        addClassToElement(submitBtn, "book-btn");
        appendChildToEl(bookingForm, submitBtn);


        submitBtn.addEventListener("click", ()=>{
            bookDates();
        })

        let bookDates = () => {

            const url = "https://localhost:7133/api/HotelBookings/CreateBooking";

            const dateInput1 = arrivalDateInput.value;
            const dateInput2 = departureDateInput.value;

            const date1 = new Date(dateInput1);
            const date2 = new Date(dateInput2);

            const timeDiff = Math.abs(date2.getTime() - date1.getTime());

            const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

            const data = {
                id: 0,
                GuestName: nameInput.value,
                Email: mailInput.value,
                PhoneNumber: numberInput.value,
                RoomId: roomId,
                CheckIn: dateInput1,
                CheckOut: dateInput2,
                BookingPrice: daysDiff * roomData.NightPrice
            };

            const requestBody = JSON.stringify(data);

            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody
            };

            fetch(url, requestOptions)
                .then(response => response.json())
                .then(data => {
                    
                    console.log(data);
                    console.log("it worked");
                });

        };

    });

