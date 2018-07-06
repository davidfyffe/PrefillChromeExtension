chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({dailyHours: { dailyHours: '7.5', office: 'Belfast'}}, function() {
        console.log("DailyHours = " + 7.5);
        console.log("Office = " + 'Belfast');
    });

    chrome.storage.sync.set({weeklyHours: '37.5'}, function() {
        console.log("WeeklyHours = " + 37.5);
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'timekeeping.aws.lmig.com'}
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
