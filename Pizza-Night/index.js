/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: 
*/

const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 7,
  "🍝 pasta": 5,
};

function findTheWinner(obj) {
  /*
  let array = []
  let name = ""
  for (let prop in obj) {
      array.push(obj[prop])
  }
  let highestNumber = Math.max(...array)
  for (let pro in obj) {
      if (obj[pro] === highestNumber) {
          name = pro
      }
  }
I had tried before seeing the solution of this challenge*/
  let highestNumber = 0;
  let name = "";
  for (let food in obj) {
    if (obj[food] > highestNumber) {
      highestNumber = obj[food];
      name = food;
    }
  }
  return `The winner is ${name} with ${highestNumber} votes!`;
}

console.log(findTheWinner(gameNightFood));
