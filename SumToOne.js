/*
Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that
sums a give integer's digits repeatedly until the sum is only one digit. Return that one-digit result.
Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+0 = 10, then 1+0 = 1.
*/

function sumToOne(num) {
    let digits = [];
    let strNum = num;

    while (digits.length !== 1) {
        digits = [];    // Clear array at the beginning of each loop
        strNum = strNum.toString();    // Convert num to string to make num's digits iterable

        // Insert string characters into array
        for (let i = 0; i < strNum.length; i++) {
            digits.push(strNum[i]);
        }

        strNum = parseInt(0);   // Reset back to int 0 to add new sum of digits

        // Get sum of digits
        for (let digit of digits) {
            strNum += parseInt(digit);
        }
    }
    return strNum;
}

sumToOne(928);
sumToOne(155);