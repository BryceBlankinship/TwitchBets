/**
 * This extension shouldn't have much performance need, so making everything in one JS file.
 */

let twitchLogo = document.getElementById("twitch-logo");


twitchLogo.addEventListener("click", function (){
    window.location.href = "https://www.twitch.tv/";
});

twitchLogo.addEventListener("mouseenter", function (){
    this.src = "../images/twitch-purple.svg";
});

twitchLogo.addEventListener("mouseleave", function (){
    this.src = "../images/twitch-white.svg";
});
