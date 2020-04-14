/*
Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1.
Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.
*/

function isPrime(num) {
    if (num !== 2 && num % 2 === 0) return false;   // Return if even number other than 2

    let divNum = Math.floor(num / 2);   // Divide by 2 then round down for whole number

    // Check if divisible by every odd number
    while (divNum > 1) {
        if (num % divNum === 0) return false;
        divNum -= 2;
    }
    return true;
}

console.log(isPrime(347)); // False
console.log(isPrime(371)); // True