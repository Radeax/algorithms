// -- Push Front -- //
// Given array an an additional value, insert this value at the beginning of the array.
// Do this without using any built-in array methods.
function pushFront(arr, val) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = val;
    return arr;
}

// -- Pop Front -- //
// Given array, remove and return the value at the beginning of the array.
// Do this without using any built-in array methods except pop().
function popFront(arr) {
    const temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    arr.pop();
}

// -- Insert At -- //
// Given array, index, and additional value, insert the value into array at given index.
// Do this without using built-in array methods.
// You can think of pushFront(arr, val) as equivalent to insertAt(arr, 0, val).
function insertAt(arr, idx, val) {
    for (let i = arr.length; i > idx; i--) {
        arr[i] = arr[i - 1];
    }
    arr[idx] = val;
}

// -- Remove At -- //
// Given array and an index into array, remove and return the array value at that index.
// Do this without using built-i9n array methods except pop().
// Think of popFront(arr) as equivalent to removeAt(arr, 0).
function removeAt(arr, idx) {
    const temp = arr[idx];
    for (let i = idx; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    arr.pop();
}

// -- Swap Pairs -- //
// Swap positions of successifve pairs of values of given array. If length is odd, do not change the final element.
// For [1, 2, 3, 4], return [2, 1, 4, 3]. For example, change input ["Brendan", true, 42] to [true, "Brendan", 42].
// As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        if (i == arr.length - 1 && arr.length - 1 % 2 !== 0) break;
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

// -- Remove Duplicates -- //
// Given a sorted array, remove duplicate values.
// Because array elements are already in order, all duplicate values will be grouped together.
// As with all array challenges, do this without using any built-in array methods.
function removeDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) removeAt(arr, i + 1);
    }
}

// -- Min to Front -- //
// Given an array of comparable values, move the lowest element to array's front, shifting backward any
// elements previously ahead of instanceof. Do not otherwise change the array's order. Given [4, 2, 1, 3, 5],
// change it to [1, 4, 2, 3, 5] and return it. As always, do this without using built-in functions.
function minToFront(arr) {
    let min = arr[0];
    let idx = 0;

    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            idx = i;
        }
    }

    while (idx > 0) {
        let temp = arr[idx];
        arr[idx] = arr[idx - 1];
        arr[idx - 1] = temp;
        idx--;
    }
    return arr;
}

const array = [3, 27, -15, 13, 13, 8, 8];
let val = 10;

console.log(array);
// pushFront(array, val);
// popFront(array);
// insertAt(array, 6, 88);
// removeAt(array, 2);
// swapPairs(array);
// removeDuplicates(array);
console.log(minToFront(array));
// console.log(array);