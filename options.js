'use strict';

function createForm() {

    let dailyHours = document.getElementById("dailyHours");
    let weeklyHours = document.getElementById("weeklyHours");
    let office = document.querySelector('.officeCheckBox:checked');

    //set text to stored value
    chrome.storage.sync.get({dailyHours: {dailyHours: dailyHours.value, office: office.value}}, function(data) {
        dailyHours.value = data.dailyHours.dailyHours;
        office.value = data.dailyHours.office;
    });

    chrome.storage.sync.get({weeklyHours: weeklyHours.value}, function(data) {
        weeklyHours.value = data.weeklyHours;
    });

    //save new values
    let button = document.getElementById('saveButton');
    button.addEventListener('click', function() {

        let officeUpdatedValue = document.querySelector('.officeCheckBox:checked').value;

        chrome.storage.sync.set({dailyHours: {dailyHours: dailyHours.value, office: officeUpdatedValue}}, function() {
            console.log("DailyHours =" + dailyHours.value);
            console.log("Office =" + officeUpdatedValue);
        });

        chrome.storage.sync.set({weeklyHours: weeklyHours.value}, function() {
            console.log("WeeklyHours = " + weeklyHours.value);
        });
    });
}

createForm();
