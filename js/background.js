/*
*   Welcome to the background service worker!
*   This is going to be the default background event listener/handler for the entire extension.
*/

chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL){
        chrome.tabs.create({
            url: 'https://www.twitch.tv/'
        });
    }
});