let prefillHours = document.getElementById('prefillHours');

prefillHours.onclick = function(element) {

    console.log('prefillHours has been clicked');

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: 'prefillTextBoxes.js'});
    });
};