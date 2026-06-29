document.addEventListener("DOMContentLoaded", () => {
    let GaliwebText = document.getElementById("GaliwebText");
    let SplashScreen = document.getElementById("SplashScreen");

    GaliwebText.classList.add("Intro");

    setTimeout( () => {
        GaliwebText.style.visibility = "hidden";
        SplashScreen.style.visibility = "hidden";
    }, 2500);
});