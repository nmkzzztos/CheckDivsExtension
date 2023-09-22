// Listener for start button
document.getElementById('startButton').addEventListener('click', function() {
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];
    chrome.tabs.executeScript(
    activeTab.id,
    { file: 'start.js' }
    );
});
});

// Listener for stop button
document.getElementById('stopButton').addEventListener('click', function() {
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];
    chrome.tabs.executeScript(
    activeTab.id,
    { file: 'stop.js' }
    );
});
});