import podcasts from "./data.js";

/* Awards to podcast hosts

It's time for the Awards distribution, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/
const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data) {
    // return data.map(e => e.hosts).flat()
    return data.reduce((acc, curr) => {
        return acc.concat(curr.hosts)
    }, [])
}

function assignAwards(data) {
    return getHosts(data).map(e => {
        let randomNumber = Math.floor(Math.random() * awards.length)
        return `${awards[randomNumber]} ${e}`
    })
}


console.log(getHosts(podcasts));
console.log(assignAwards(podcasts));
