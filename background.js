chrome.tabs.create({url:'https://www.google.com'}, callback);
function callback(data){
	console.log(data);
}

function hello() {
    chrome.tabs.executeScript(null, { file: "injectedScripts/jquery-2.1.3.min.js" }, function () {
        chrome.tabs.executeScript(null, { file: "a.js" });
    });
}

// Supposed to Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(hello);