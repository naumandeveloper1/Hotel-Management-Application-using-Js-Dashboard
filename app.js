/*
================================================
        Add EventListener to the buttons
================================================
 */

//add the bookingadd content li selected

let addBookingContent = document.querySelector("#booking").textContent;
addBookingContent = Number(addBookingContent);
addBookingContent = 0;
// console.log(addBookingContent);

document.querySelector("#booking").textContent = addBookingContent;
// console.log(typeof (addBookingContent));

//add the input box to select the value of its
let inputValue = document.querySelector("#bookingValue");


//Add booking button add event now
let addBooking = document.querySelector("#add");
addBooking.addEventListener("click", () => {
    addBooking.classList.remove("btn-danger")
    addBooking.classList.add("btn-info")
    // console.log(inputValue);
    // console.log(addBookingContent);
    // console.log(typeof (inputValue.value));
    inputValue = inputValue.value;
    inputValue = Number(inputValue);
    addBookingContent = addBookingContent + inputValue;
    // console.log(addBookingContent);
    document.querySelector("#booking").textContent = addBookingContent;

    console.log(addBookingContent);
    inputValue = 0;


});

// let addBookingContent2;
// addBooking.addEventListener("dblclick", () => {
//     inputValue = document.querySelector("#bookingValue").value;
//     addBookingContent2 = addBookingContent;
//     addBooking.classList.add("btn-danger");
//     addBooking.classList.remove("btn-info");
//     console.log(typeof (addBookingContent2));
//     inputValue = Number(inputValue);

//     addBookingContent2 += inputValue;
//     console.log(addBookingContent2);
//     // document.querySelector("#booking").textContent = addBookingContent2;
// })


//cancel button addEventListener
let cancelBooking = document.querySelector("#cancel");
cancelBooking.addEventListener("click", () => {
    inputValue = document.querySelector("#bookingValue").value;
    inputValue = Number(inputValue);
    addBookingContent -= inputValue;
    document.querySelector("#booking").textContent = addBookingContent;
});

//available room button addEventListener
let availableRoomContent = document.querySelector("#room").textContent;
let availableRoom = document.querySelector("#available");
availableRoom.addEventListener("click", () => {
    alert("There are total " + availableRoomContent + ".");
});


//free room button addEventListener
// let availableRoomContent = document.querySelector("#room").textContent;

let freeRoomContent = document.querySelector("#room").textContent;
freeRoomContent = Number(freeRoomContent);
let freeRoom = document.querySelector("#free");
freeRoom.addEventListener("click", () => {
    freeRoomContent = freeRoomContent - addBookingContent;
    // alert(freeRoomContent);
    if (freeRoomContent == (availableRoomContent - availableRoomContent)) {
        alert("Sorry all rooms are booked.");
    }
    else if (freeRoomContent == 1) {
        alert("There are " + freeRoomContent + " room are free.");
    }
    else if (freeRoomContent <= availableRoomContent) {
        alert("There are " + freeRoomContent + " rooms are free.");
    }

});
