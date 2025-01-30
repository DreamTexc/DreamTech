// background.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.greeting === "hello") {
    sendResponse({farewell: "goodbye"});
  }
});
