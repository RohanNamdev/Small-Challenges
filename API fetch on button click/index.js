/* Topics Covered

* Servers and Clients
* Request/Response cycle
* APIs
* JSON
* `fetch` syntax

*/

function getActivityIdea() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("idea").textContent = data.activity;
      document.body.classList.add("fun");
      document.getElementById("title").textContent = "🦾 HappyBot🦿";
    });
}

document
  .getElementById("bored-button")
  .addEventListener("click", getActivityIdea);
