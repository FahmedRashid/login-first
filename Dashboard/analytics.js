//feature in progress getting the element by ID
// const card = document.getElementById("card")
// const message = document.getElementById("message")

// card.addEventListener("click", (event)=> {
//     if(message.innerHTML === "Click here"){
//         message.innerHTML = "Feature in Progress. Please kindly check something else."
//     }else{
//         message.innerHTML = "Bruh! You just did not click me again! My Gaad!";
//     }
// });

//feature in progress getting the element by class
const cards = document.querySelectorAll(".card"); // Selecting all elements with class "card"
cards.forEach((card) =>{
    const message = card.querySelector(".message"); // Selecting the message element within each card
    card.addEventListener("click", ()=>{
        if(message.innerHTML=== "Click here"){
            message.innerHTML = "Feature in Progress. Please kindly check something else.";
        }else{
            message.innerHTML = "Bruh! You just did not click me again! My Gaad!";
        }
    })
});
