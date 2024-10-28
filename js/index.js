
//I added this code towards the end of class. I wanted to streamline the themes so that
//If I wanted to add more themes I wouldn't have to rework the entire code every time.
const themes = ["Lightmode", "Darkmode", "Bluemode", "Greenmode"];

//Event listener and function to remove darkmode class

document.getElementById("LightButton").addEventListener("click", function() {
    document.body.classList.remove("Darkmode", "Bluemode", "Greenmode");
    document.body.classList.add("Lightmode");
});

//Event listener and function to add darkmode class

document.getElementById("DarkButton").addEventListener("click", function() {
    document.body.classList.remove("Lightmode", "Bluemode", "Greenmode")
    document.body.classList.add("Darkmode");
});

//Event listener and function to add bluemode class
document.getElementById("BlueButton").addEventListener("click", function() {
    document.body.classList.remove("Lightmode", "Darkmode", "Greenmode")
    document.body.classList.add("Bluemode");
});

document.getElementById("GreenButton").addEventListener("click", function() {
    document.body.classList.remove("Lightmode", "Bluemode", "Darkmode")
    document.body.classList.add("Greenmode");
});
