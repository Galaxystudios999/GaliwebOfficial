let GaliwebText = document.getElementById("GaliwebText");
let SplashScreen = document.getElementById("SplashScreen");

document.addEventListener("DOMContentLoaded", () => {
    GaliwebText.classList.add("Intro");

    setTimeout( () => {
        GaliwebText.style.visibility = "hidden";
        SplashScreen.style.display = "none";
    }, 2500);
});