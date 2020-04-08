/* Implement function sigma(num) that given a Number, returns the sum of all positve integers up to 
number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 = 3 + 4 + 5). */

function sigma(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// Tests
console.log(sigma(3));
console.log(sigma(5));