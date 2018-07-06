'use strict';

console.log('Executing inside prefillTextBoxes');

chrome.storage.sync.get('dailyHours', function(data) {

    // Create a new 'change' event required to trigger the angular model updates.
    let event = new Event('change');

    let monday = document.getElementById('Work ' + data.dailyHours.office + '.monday');
    monday.value = data.dailyHours.dailyHours;
    monday.dispatchEvent(event);

    let tuethurs = data.dailyHours.office === 'Belfast' ? document.querySelectorAll('*[id^="Work Belfast.t"]') : document.querySelectorAll('*[id^="Work Dublin.t"]');
    tuethurs.forEach(d => {
        d.value = data.dailyHours.dailyHours;
        d.dispatchEvent(event);
    });

    let wednesday = document.getElementById('Work ' + data.dailyHours.office + '.wednesday');
    wednesday.value = data.dailyHours.dailyHours;
    wednesday.dispatchEvent(event);

    let friday = document.getElementById('Work ' + data.dailyHours.office + '.friday');
    friday.value = data.dailyHours.dailyHours;
    friday.dispatchEvent(event);

});

chrome.storage.sync.get('weeklyHours', function(data) {
    document.getElementById('subtotal').value = data.weeklyHours;
});
