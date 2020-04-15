/*
Create the extractDigit(num, digitNum) function that given a number and a digit number, returns
the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given
(1824, 2), return 8. Given (1824, 0), return 4. Given (1824, 7) return 0.
*/

function extractDigit(num, digitNum) {
    let divider = 1;

    for (let i = 0; i < digitNum; i++) {
        divider *= 10;
    }

    let digit = (num / divider) % 10;

    return Math.floor(digit);
}

console.log(extractDigit(1824, 3));

/* Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents
hundredths digit (0.0x), etc. Given (123.45, -1), return 4.
*/

function extractDigit(num, digitNum) {
    let divider = 1;
    let digit;

    if (digitNum >= 0) {
        for (let i = 0; i < digitNum; i++) {
            divider *= 10;
        }
        digit = (num / divider) % 10;
        return Math.floor(digit);
    }
    else {
        for (let i = 0; i > digitNum; i--) {
            divider *= -10;
        }
        digit = (num * divider) % 10;
        return Math.ceil(digit);
    }
}

console.log(extractDigit(1824.567, -3));

/* Third: handle negative num values as well, doing what you think is appropriate. */

function extractDigit(num, digitNum) {
    let divider = 1;
    let digit;

    if (num < 0) num *= -1;

    if (digitNum >= 0) {
        for (let i = 0; i < digitNum; i++) {
            divider *= 10;
        }
        digit = (num / divider) % 10;
        return Math.floor(digit);
    }
    else {
        for (let i = 0; i > digitNum; i--) {
            divider *= -10;
        }
        digit = (num * divider) % 10;
        digit *= -1;
        return Math.ceil(digit);
    }
}

console.log(extractDigit(-1824.567, 2));