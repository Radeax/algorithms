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

// -- Acronyms -- //
// Create a function that, given a string, returns the string's acronym (first letters only, capitalized)
// Given " there's no free lucnh - gotta pay yer way. ", return "TNFL-GPYW".
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
function getAcronym(str) {
    let phrase = str.split(" ");
    let acronym = phrase.map(word => word[0]);
    return acronym.join('').toUpperCase();
}

getAcronym(" there's no free lunch - gotta pay yer way. ");
getAcronym("Live from New York, it's Saturday Night!");

// -- Count Non-Spaces -- //
// Accept a string and return the number of non-space characters found in the string.
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
function countNonSpaces(str) {
    let words = str.split(' ');
    return words.reduce((sum, word) => sum + word.length, 0);
}

countNonSpaces('Honey pie, you are driving me crazy');

// -- Remove Shorter Strings -- //
// Given a string array and value (length), remove any strings shorter than length from the array.
function removeShorterStrings(strArr, length) {
    return strArr.reduce((newArr, ele) => {
        if (ele.length < length) newArr.push(ele);
        return newArr;
    }, []);
}

removeShorterStrings(['hello', 'world', 'shorter', 'strings'], 6);

// -- String: Reverse -- //
// Implement reverseString(str) that, given string, returns that string with characters reversed.
// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!
function reverseString(str) {
    let reversed = [];
    for (let i = str.length; i >= 0; i--) {
        reversed.push(str[i]);
    }
    return reversed.join('');
}

reverseString('creature');

// -- Remove Even-Length Strings -- //
// Build a standalone function to remove strings of even lengths from a given array.
function removeEvenLengthStrings(arr) {
    console.log(arr.reduce((odds, str) => {
        if (str.length % 2 !== 0) odds.push(str);
        return odds;
    }, []));
}

removeEvenLengthStrings(['Is', 'this', 'sentence', 'odd', 'or', 'even', '?']);

// -- Integer to Roman Numerals -- //
// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral
// representation. In this representation, I, is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000.
function convertToRoman(n) {
    if (n >= 4000) return 'Enter only positive integers less than 4000';
    let intValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanValue = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let romanNum = [];

    for (let i = 0; i < intValue.length; i++) {
        while (n >= intValue[i]) {
            romanNum.push(romanValue[i]);
            n -= intValue[i];
        }
    }
    return romanNum.join('');
}

convertToRoman(955);

// -- Roman Numerals to Integer -- //
// Given a string containing a Roman numeral representation of a positive integer, return the integer.
function romanToInteger(r) {
    let num = 0;
    let str = r.split('');
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'M' || 'm':
                num += 1000;
                break;
            case 'D' || 'd':
                num += 500;
                break;
            case 'C' || 'c':
                if (str[i + 1] === 'M' || str[i + 1] === 'm') {
                    num += 900;
                    i++;
                }
                else if (str[i + 1] === 'D' || str[i + 1] === 'd') {
                    num += 500;
                    i++;
                }
                num += 100;
                break;
            case 'L' || 'l':
                num += 50;
                break;
            case 'X' || 'x':
                if (str[i + 1] === 'C' || str[i + 1] === 'c') {
                    num += 90;
                    i++;
                }
                else if (str[i + 1] === 'L' || str[i + 1] === 'l') {
                    num += 40;
                    i++;
                }
                num += 10;
                break;
            case 'V' || 'v':
                num += 5;
                break;
            default:
                if (str[i + 1] === 'V' || str[i + 1] === 'v') {
                    num += 4;
                    i++;
                }
                else {
                    num += 1;
                }
        }
    }
    return num;
}
romanToInteger('MMCXVIV');

// -- Parens Valid -- //
// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid.
// Valid sets of parentheses always open before they close, for example.
// For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k",
// return false, because the underlined ")" is premature: there is nothing open for it to close.
function parensValid(str) {
    let parens = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") parens++;
        if (str[i] === ")") parens--;
        if (parens < 0) return false;
    }
    return parens === 0;
}

parensValid("Y(3(p)p(3)r)s");   // true
parensValid("N(0(p)3");         // false
parensValid("N(0)t )0(k");      // false

// -- Braces Valid -- //
// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example:
// "W(a{t}s[o(n{ c}o)m]e )h[e{r}re]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(l)s(o(n]0{t) 0}k" => false.
function bracesValid(str) {
    const braces = [];
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "(":
                braces.push(")");
                break;
            case "[":
                braces.push("]");
                break;
            case "{":
                braces.push("}");
                break;
        }
        if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
            if (str[i] !== braces.pop()) return false;
        }
    }
    return braces.length === 0 ? true : false;
}

bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}re]!");
bracesValid("D(i{a}l[ t]o)n{e");
bracesValid("A(l)s(o(n]0{t) 0}k");