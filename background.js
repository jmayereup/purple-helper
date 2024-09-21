chrome.action.onClicked.addListener(function (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: sendSelectedTextToPPR
  })
});


chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "readOnPPR",
    title: "Read on PPR",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "readOnPPR") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: sendSelectedTextToPPR
    });
  }
});

function sendSelectedTextToPPR() {
  const selectedText = window.getSelection().toString();
  if (selectedText.trim() === "") {
    alert("Please select some text before using the context menu.");
  } else {
    const encodedText = encodeURIComponent(selectedText);
    const targetUrl = `https://purplepeoplesreader.com/list/USER/A1?text=${encodedText}`;
    window.open(targetUrl, "_blank");
  }
}
