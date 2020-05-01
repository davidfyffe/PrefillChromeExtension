'use strict';

console.log('Executing inside prefillTextBoxes');

chrome.storage.sync.get('dailyHours', function(data) {

    // Create a new 'change' event required to trigger the angular model updates.
    let event = new Event('change');

    let i=0;
    document.querySelectorAll('input[catalystnewnumberonlyfield]').forEach(sel => {
        if(i < 5) {
            i++;
            sel.value = data.dailyHours.dailyHours;
            sel.dispatchEvent(event);
        }
    })
});
