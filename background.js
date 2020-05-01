chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({dailyHours: { dailyHours: '7.5', office: 'UK'}}, function() {
        console.log("DailyHours = " + 7.5);
        console.log("Office = " + 'UK');
    });

    chrome.storage.sync.set({weeklyHours: '37.5'}, function() {
        console.log("WeeklyHours = " + 37.5);
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'pendulum.lmig.com'}
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
