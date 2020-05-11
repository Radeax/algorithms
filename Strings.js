// -- Remove Blanks -- //
// Create a function that, given a string, returns all of that string's contents, but without blanks. If given the
// string " Pl   ayTha  tF u  nkyM  usi   c  ", return "PlayThatFunkyMusic".
function removeBlanks(str) {
    return str.split(' ').join('');
}

console.log(removeBlanks(" Pl   ayTha  tF   u  nkyM  usi   c  "));

// -- String: Get Digits -- //
// Create a JavaScript function that given a string, returns the integer made form the string's digits.
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
function getDigits(str) {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arr = str.split('');
    return arr.map(char => {
        if (digits.find(digit => char == digit)) {
            return char;
        }
    }).join('');
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));