//Create a button that changes the background and text color randomly when clicked

//create button
//select button & store in a variable
//button should run code when clicked
//function should change background color
//function should change text color
//function should change colors to random value


const myButton = document.querySelector(".btn");

function updateColors(){
document.body.style.backgroundColor="#1ce";
}

//event listener
myButton.addEventListener("click", updateColors);