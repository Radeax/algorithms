/* Create threesFives() that adds values from 100 and 4000000 (inclusive) IF that value is evenly
divisible by 3 or 5 but not both. Display the final sum in the console.

Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end
values for your range. Think of threesFives() as betterThreesFives(100,4000000). */

function threesFives() {
    let sum = 0;
    for (let i = 100; i <= 4000000; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            sum += i;
        }
    }
    console.log(sum);
}

function betterThreesFives(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            sum += i;
        }
    }
    console.log(sum);
}

threesFives();
betterThreesFives(100, 4000000);