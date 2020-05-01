'use strict';

function createForm() {

    let dailyHours = document.getElementById("dailyHours");
    let office = document.querySelector('.officeCheckBox:checked');

    //set text to stored value
    chrome.storage.sync.get({dailyHours: {dailyHours: dailyHours.value, office: office.value}}, function(data) {
        dailyHours.value = data.dailyHours.dailyHours;
        office.value = data.dailyHours.office;
    });

    //save new values
    let button = document.getElementById('saveButton');
    button.addEventListener('click', function() {

        let officeUpdatedValue = document.querySelector('.officeCheckBox:checked').value;

        chrome.storage.sync.set({dailyHours: {dailyHours: dailyHours.value, office: officeUpdatedValue}}, function() {
            console.log("DailyHours =" + dailyHours.value);
            console.log("Office =" + officeUpdatedValue);
        });

    });
}

createForm();
