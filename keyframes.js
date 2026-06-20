let GaliwebText = document.getElementById("GaliwebText");

document.addEventListener("DOMContentLoaded", () => {
    GaliwebText.classList.add("Intro");

    setTimeout( () => {
        GaliwebText.style.visibility = "hidden";
    }, 2500);
});