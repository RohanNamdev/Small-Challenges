import shoppingCart from "./data.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr) {
  return arr.reduce((acc, curr) => {
    return curr.type === "savory" ? acc + curr.price : acc;
  }, 0);
}

console.log(totalSavory(shoppingCart));
