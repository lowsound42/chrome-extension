chrome.browserAction.onClicked.addListener((tabs) => {
  console.log(tabs.url);
})