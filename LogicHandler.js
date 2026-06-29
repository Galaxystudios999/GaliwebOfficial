let FollowLabel = document.getElementById("FollowLabel");
let ForYouLabel = document.getElementById("ForYouLabel");

let Follow = document.getElementById("Follow");
let ForYou = document.getElementById("ForYou");

Follow.addEventListener("touchstart", (e) => {
    e.preventDefault;
    FollowLabel.style.fontSize = "1.4rem";
    ForYouLabel.style.fontSize = "1.0rem";
});

ForYou.addEventListener("touchstart", (e) => {
    e.preventDefault;
    FollowLabel.style.fontSize = "1.0rem";
    ForYouLabel.style.fontSize = "1.4rem";
});