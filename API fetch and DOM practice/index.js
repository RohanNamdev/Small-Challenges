/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/
let content = document.createElement("h1")
document.body.appendChild(content)

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => content.textContent = data.activity)
