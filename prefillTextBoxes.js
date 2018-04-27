'use strict';

console.log('Executing inside prefillTextBoxes');

chrome.storage.sync.get('dailyHours', function(data) {

    // Create a new 'change' event required to trigger the anguar model updates.
    let event = new Event('change');

    let monday = document.getElementById('Work.monday');
    monday.value = data.dailyHours;
    monday.dispatchEvent(event);

    let tuethurs = document.querySelectorAll('*[id^="Work.t"]');
    tuethurs.forEach(d => {
        d.value = data.dailyHours;
        d.dispatchEvent(event);
    });

    let wednesday = document.getElementById('Work.wednesday');
    wednesday.value = data.dailyHours;
    wednesday.dispatchEvent(event);

    let friday = document.getElementById('Work.friday');
    friday.value = data.dailyHours;
    friday.dispatchEvent(event);

});

chrome.storage.sync.get('weeklyHours', function(data) {
    document.querySelector('*[id^="subtotal"]').value = data.weeklyHours;
});
