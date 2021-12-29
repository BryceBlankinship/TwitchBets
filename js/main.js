let twitchLogo = document.getElementById("twitch-logo");


twitchLogo.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: changePageToTwitch,
    });
});

twitchLogo.addEventListener("mouseenter", function (){
    this.src = "../images/twitch-purple.svg";
});

twitchLogo.addEventListener("mouseleave", function (){
    this.src = "../images/twitch-white.svg";
});

function changePageToTwitch() {
    window.location.href = "https://www.twitch.tv/";
}
