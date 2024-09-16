chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "sendSelectedText") {
      let selectedText = window.getSelection().toString();
      console.log(selectedText);
      if (selectedText.trim() === "") {
        alert("Please select some text before clicking the button."); 
      } else {
        let encodedText = encodeURIComponent(selectedText);
        let targetUrl = "https://purplepeoplesreader.com/list/USER/A1?text=" + encodedText;
        window.open(targetUrl, "_blank"); 
      }
    }
  });