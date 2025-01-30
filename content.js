// content.js or popup.js
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
  } else {
    console.log(response.farewell);
  }
});
