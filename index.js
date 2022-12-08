//Inserting DOM nodes
//Optional File
//Can be loaded in the html file

const testVar = "hi"

/* Enter the code to remove the node element here */
document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
