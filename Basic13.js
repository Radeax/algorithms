/* Complete these challenges in less than two minutes (whiteboard) */

// 1 - Print all the integers from 1 to 255
function print1To255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}

// 2 - Print all odd integers from 1 to 255
function printOdds1To255() {
    for (let i = 1; i <= 255; i++) {
        if (i % 2 !== 0) console.log('Odds:', i);
    }
}

// 3 - Print integers from 0 to 255, and with each integer print the sum so far
function printIntsAndSum0To255() {
    let sum = 0;
    for (let i = 0; i <= 255; i++) {
        sum += i;
        console.log('Index:', i, 'Sum:', sum);
    }
}

// 4 - Iterate through a given array, printing each value
function printArrayVals(arr) {
    for (let val of arr) {
        console.log('Array Value:', val);
    }
}

// 5 - Given an array, find and print its largest element
function printMaxOfArray(arr) {
    let max = arr[0];
    for (let val of arr) {
        if (max < val) max = val;
    }
    console.log('Max:', max);
}

// 6 - Analyze an array's values and print the average
function printAverageOfArray(arr) {
    let sum = 0;
    for (let val of arr) {
        sum += val;
    }
    let avg = sum / arr.length;
    console.log('Average:', avg);
}

// 7 - Create an array with all the odd integers between 1 and 255 (inclusive)
function returnOddsArray1To255() {
    let arr = [];
    for (let i = 1; i <= 255; i++) {
        if (i % 2 !== 0) arr.push(i);
    }
    console.log(arr);
}

// 8 - Square each value in a given array, returning that same array with changed values
function squareArrayVals(arr) {
    for (const i in arr) {
        arr[i] *= arr[i];
    }
    return (arr);
}

// 9 - Given an array and a value Y, count and print the number of array values greater than Y
function returnArrayCountGreaterThanY(arr, y) {
    let count = 0;
    for (const val of arr) {
        if (val > y) count++;
    }
    console.log('# of values greater than Y: ', count);
}

// 10 - Return the given array, after setting any negative values to zero
function zeroOutArrayNegativeVals(arr) {
    for (let i in arr) {
        if (arr[i] < 0) arr[i] = 0;
    }
    return arr;
}

// 11 - Given an array, print the max, min and average values for that array
function printMaxMinAverageArrayVals(arr) {
    let min, max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (max < arr[i]) {
            max = arr[i];
        }
        else {
            min = arr[i];
        }
    }
    let avg = sum / arr.length;

    console.log('Max:', max);
    console.log('Min:', min);
    console.log('Average:', avg);
}

// 12 - Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array
function shiftArrayValsLeft(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = 0;
    return arr;
}

// 13 - Given an array of numbers, replace any negative values with the string 'Dojo'
function swapStringForArrayNegativeVals(arr) {
    for (const i in arr) {
        if (arr[i] < 0) arr[i] = 'Dojo';
    }
    return arr;
}

const array = [25, -7, 15, 5, 10, 30, 10, -10];

// printIntsAndSum0To255();                             // 1
// printOdds1To255();                                   // 2
// printIntsAndSum0To255();                             // 3
// printArrayVals(array);                               // 4
// printMaxOfArray(array);                              // 5
// printAverageOfArray(array);                          // 6
// returnOddsArray1To255();                             // 7
// console.log(squareArrayVals(array));                 // 8
// returnArrayCountGreaterThanY(array, 14);             // 9
// console.log(zeroOutArrayNegativeVals(array));        // 10
// printMaxMinAverageArrayVals(array);                  // 11
// console.log(shiftArrayValsLeft(array));              // 12
console.log(swapStringForArrayNegativeVals(array));  // 13