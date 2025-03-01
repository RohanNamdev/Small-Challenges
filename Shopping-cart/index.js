import shoppingCart from "./data.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr) {
  //   return arr
  //   .map(e=>e.price)
  //   .reduce((a,b)=>a+b).toFixed(2)

  /* I had try the above solution before going for the solution then modified it */

  let value = arr.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return value.toFixed(2);
}

console.log(total(shoppingCart));
