/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate  everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/

const api =
  "https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature";
const flowerBed = document.querySelector(".emoji-flower-bed");

function clearTheGarden(arr) {
  arr.forEach((emoji) => {
    if (emoji.group === "animal bug" || emoji.group === "plant flower") {
      flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
    }
  });
}

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    clearTheGarden(data);
  })
  .catch((err) => console.log(err));
