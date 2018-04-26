'use strict';

console.log('Executing inside prefillTextBoxes');

chrome.storage.sync.get('dailyHours', function(data) {
    document.querySelectorAll('*[id^="Work.m"]').forEach(d => d.value= data.dailyHours);
    document.querySelectorAll('*[id^="Work.t"]').forEach(d => d.value= data.dailyHours);
    document.querySelectorAll('*[id^="Work.w"]').forEach(d => d.value= data.dailyHours);
    document.querySelectorAll('*[id^="Work.f"]').forEach(d => d.value= data.dailyHours);
});

chrome.storage.sync.get('weeklyHours', function(data) {
    document.querySelector('*[id^="subtotal"]').value = data.weeklyHours;
});
