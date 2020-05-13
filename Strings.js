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