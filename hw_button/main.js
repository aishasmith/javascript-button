// * Demo 3 * //
const title = document.getElementById('mainTitle');
// After adding this, open the console and type 'title'
// so the students can see what this looks like for js
const changeTitleButton = document.getElementById('changeTitleBtn');
changeTitleButton.style.width = '100px';
changeTitleButton.style.fontSize = '20px';

// Center everything in our body;
document.body.style.textAlign = 'center';
title.style.color = 'red';

// Event Listener function
changeTitleButton.addEventListener("click", function(event) {
console.log("Click Detected");
// innerHTML vs innerText = innerHTML understand tags.
// it takes whats in it as HTML code, if this was innerText
//<br> would appear as text
title.innerHTML = "Hello World! <br> Look at me coding!";
title.style.fontFamily = 'Courier New';
title.style.backgroundColor = 'orange';
title.style.padding = '30px';
title.style.border = '5px dashed red';
title.style.borderRadius = '20px';
});

//Function for Event Attribute
function ChangeBackgroundColour() { //run on mouse
    title.style.backgroundColor = 'blue';
}

function RemoveBackgroundColour() {
    title.style.backgroundColor = 'white';
}