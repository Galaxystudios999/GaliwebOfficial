let GaliwebText = document.getElementById("GaliwebText");
let SplashScreen = document.getElementById("SplashScreen");
setTimeout( () => {
    GaliwebText.classList.add("Intro");
}, 200);

setTimeout( () => {
    GaliwebText.style.visibility = "hidden";
    SplashScreen.style.visibility = "hidden";
}, 2500);