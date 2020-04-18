// Given array an an additional value, insert this value at the beginning of the array.
// Do this without using any built-in array methods.
function pushFront(arr, val) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = val;
    return arr;
}

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

// Given array, index, and additional value, insert the value into array at given index.
// Do this without using built-in array methods.
// You can think of pushFront(arr, val) as equivalent to insertAt(arr, 0, val).
function insertAt(arr, idx, val) {
    for (let i = arr.length; i > idx; i--) {
        arr[i] = arr[i - 1];
    }
    arr[idx] = val;
}

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

// Given a sorted array, remove duplicate values.
// Because array elements are already in order, all duplicate values will be grouped together.
// As with all array challenges, do this without using any built-in array methods.
function removeDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) removeAt(arr, i + 1);
    }
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
console.log(array);