'use strict';

function createForm() {

    let dailyHours = document.getElementById("dailyHours");
    let weeklyHours = document.getElementById("weeklyHours");

    //set text to stored value
    chrome.storage.sync.get({dailyHours: dailyHours.value}, function(data) {
        dailyHours.value = data.dailyHours;
    });

    chrome.storage.sync.get({weeklyHours: weeklyHours.value}, function(data) {
        weeklyHours.value = data.weeklyHours;
    });


    //save new values
    let button = document.getElementById('saveButton');
    button.addEventListener('click', function() {

        chrome.storage.sync.set({dailyHours: dailyHours.value}, function() {
            console.log("DailyHours =" + dailyHours.value);
        });

        chrome.storage.sync.set({weeklyHours: weeklyHours.value}, function() {
            console.log("WeeklyHours =" + weeklyHours.value);
        });
    });
}

createForm();