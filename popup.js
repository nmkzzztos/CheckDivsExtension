document.getElementById('loadButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        chrome.tabs.executeScript(activeTab.id, { file: 'utils/variables.js' });
        chrome.tabs.executeScript(activeTab.id, { file: 'utils/functions.js' });
        chrome.tabs.executeScript(activeTab.id, { file: 'components/confirmationPopup.js' });
        chrome.tabs.executeScript(activeTab.id, { file: 'components/filterPopup.js' });
    });
});

// Listener for fillter button
document.getElementById('filterButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        chrome.tabs.executeScript( activeTab.id, {
            code: `
                openFilterPopup(filterPopup);
            `
            }
        )
    });
});

// Listener for start button
document.getElementById('startButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        chrome.tabs.executeScript(activeTab.id, {
            code: `
                console.log('Started');

                timeout = setTimeout(swapToSecondTab, TIME_FOR_SWAP);
                interval = setInterval(clickDivWithSpecificBackground, TIME_FOR_CLICK);

                console.log(\`Timeout for swap to second tab in \${TIME_FOR_SWAP / 1000} s\`);
                console.log(\`Interval for clicking buttons in \${TIME_FOR_CLICK / 1000} s\`);
                console.log('------------------');
            `
        });
    });
});

// Listener for stop button
document.getElementById('stopButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        chrome.tabs.executeScript(activeTab.id, {
            code: `
                fillConfirmationPopup(popup, checked_buttons);
                openConfirmationPopup(popup);
                clearFilterPopup(filterPopup);
                clearTimeout(timeout); 
                clearInterval(interval);
            `
        });
    });
});
