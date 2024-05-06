const containerEl = document.querySelector(".container");



//he we ask javascript to create 30 containers for us and that the container should inherit the properties of the .color-container class which we already styled with css.
for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    //he we ask javascript to put the 30 elements we created into the main div which is give variable name, containerEl
    containerEl.appendChild(colorContainerEl);
    
}
const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();


//here we ask javascript to style of the containers by changing the color to fit in the random generated background colors
       colorContainerEl.style.backgroundColor = "#" + newColorCode;


    //we ask javascript to write the code of the color into each container
        colorContainerEl.innerText = "#" + newColorCode
    });
}




function randomColor(){
    const char = "0123456789abcdefgs";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * char.length);

        colorCode += char.substring(randomNum, randomNum + 1);
        
    }
    return colorCode;
}

