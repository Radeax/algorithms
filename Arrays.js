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

// -- Reverse -- //
// Given a numerical array, reverse the order of avlues, in-place. The reversed array should have the
// same length, with existing elements moved to other indices so that order of elements is reversed.
// Working 'in-place' means that you cannot use a second array -- move values within the array that you
// are given. As always, do not use built-in array functions such as splice().
function reverse(arr) {
    const arrHalf = parseInt(arr.length / 2);
    for (let i = 0; i < arrHalf; i++) {
        const end = arr.length - 1 - i;
        const temp = arr[end];
        arr[end] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// -- Rotate -- //
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right
// by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is
// lost. Operate in-place: given ([1, 2, 3], 1), change the array to [3, 1, 2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
function rotateArr(arr, shiftBy) {
    const arrayLength = arr.length;
    shiftBy %= arrayLength;
    if (shiftBy >= 0) {
        for (let i = 0; i < shiftBy; i++) {
            const temp = arr[arrayLength - 1];
            for (let i = arrayLength - 1; i > 0; i--) {
                arr[i] = arr[i - 1];
            }
            arr[0] = temp;
        }
    }
    else {
        for (let i = 0; i > shiftBy; i--) {
            const temp = arr[0];
            for (let i = 0; i < arrayLength - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[arrayLength - 1] = temp;
        }
    }
}

// -- Filter Range -- //
// Given arr and values min and max, retain only the array values between min and max.
// Work in-place: return the array you are given, with values in original order. No built-in array functions.
function filterRange(arr, min, max) {
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[idx] = arr[i];
            idx++;
        }
    }
    arr.length = idx;
    return arr;
}

const array = [3, 27, -15, 13, 13, 8, 8, 5];
let val = 10;

console.log(array);
// pushFront(array, val);
// popFront(array);
// insertAt(array, 6, 88);
// removeAt(array, 2);
// swapPairs(array);
// removeDuplicates(array);
// minToFront(array);
// reverse(array);
// rotateArr(array, -12366233444);
filterRange(array, 3, 12);
console.log(array);