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

// -- Concat -- //
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new
// array containing the first array's elements, followed by the second array's elements. Do not alter the
// original arrays. Ex.: arrConcat( ['a', 'b'], [1, 2] ) should return new array ['a', 'b', 1, 2].
function arrConcat(arr1, arr2) {
    return [...arr1, ...arr2];
}

// -- Remove Negatives -- //
// Implement removeNegatives() that accepts an array, removes negative values, and returns the
// same array (not a copy), preserving non-negatives' order. As always, do not use built-in array functions.
function removeNegatives(arr) {
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) continue;
        arr[idx] = arr[i];
        idx++;
    }
    arr.length = idx;
    return arr;
}

// -- Second-to-Last -- //
// Return the second-to-last element of an array.
// Given [42, true, 4, "Kate", 7], return "Kate". If array is too short, return null.
// Second: don't use nested loops
function secondToLast(arr) {
    return arr.length <= 1 ? null : arr[arr.length - 2];
}

// -- Second-Largest -- //
// Return the second-largest element of an array.
// Given [42, 1, 4, Math.PI, 7], return 7. If the array is too short, return null.
function secondLargest(arr) {
    if (arr.length <= 1) return null;

    let max, secondLargest;

    // Set the max and secondLargest from first 2 elements
    if (arr[0] > arr[1]) {
        max = arr[0];
        secondLargest = arr[1];
    }
    else {
        max = arr[1];
        secondLargest = arr[0];
    }

    for (let i in arr) {
        if (arr[i] > max) {
            secondLargest = max;
            max = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] < max) secondLargest = arr[i];
    }
    return secondLargest;
}

// -- Nth-to-Last -- //
// Return the element that is N-from-array's-end.
// Given ([5, 2, 3, 6, 4, 9, 7]), return 4. If the array is too short, return null.
function nthToLast(arr, num) {
    if (arr.length < num) return null;
    return arr[arr.length - num];
}

// -- Nth-Largest -- //
// Given arr and N, return the Nth-largest element, where (N-1) elements are larger.
// Return null if needed.
function nthLargest(arr, n) {
    let newArr = [...arr];
    if (n === 0 || n > newArr.length) return null;

    for (let i = 0; i < newArr.length; i++) {
        while (newArr[i] > newArr[i + 1]) {
            let next = i + 1;
            let cur = i;
            let prev = i - 1;

            while (newArr[cur] > newArr[next]) {
                let temp = newArr[next];
                newArr[next] = newArr[cur];
                newArr[cur] = temp;
                cur++;
                next++;
            }

            cur = i;

            while (newArr[cur] < newArr[prev]) {
                let temp = newArr[prev];
                newArr[prev] = newArr[cur];
                newArr[cur] = temp;
                cur--;
                prev--;
            }
        }
    }

    return newArr[arr.length - n];
}

// -- Shuffle -- //
// Create shuffle(arr) to efficiently shuffle a given array's values. Work in-place, naturally.
function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        const randIdx = Math.floor(Math.random() * 6);
        const temp = arr[randIdx];
        arr[randIdx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// -- Remove Range -- //
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).
// Given ([20, 30, 40, 50, 60 , 70], 2, 4) change to [20, 30, 70] and return it.
function removeRange(arr, start, end) {
    if (start > end) return null;
    if (start < 0) start = 0;
    if (end >= arr.length - 1) {
        arr.length = start;
        return arr;
    }
    for (let i = 0; i + end < arr.length; i++) {
        arr[start + i] = arr[end + i + 1];
    }
    arr.length -= end - start + 1;
    return arr;
}

// -- Intermediate Sums -- //
// You will be given an array of numbers. After every tenth element, add an additional element containing
// the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last
// sum that includes those last elements not yet been included in one of the earlier sums. Given the array
// [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], change it to [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 15, 1, 2, 1, 2, 6]
function intermediateSums(arr) {
    let idx = 0, sumIdx;

    // Find where to insert the initial sum
    if (arr.length < 10) {
        sumIdx = arr.length;
    }
    else {
        sumIdx = 10;
    }

    while (idx < arr.length) {
        let sum = 0;

        // Get sum of next 10 (or less if at end of array)
        for (let i = 0; i + idx < sumIdx; i++) {
            sum += arr[idx + i];
        }

        // Shift elements 1 to the right to create space for new sum
        for (let i = arr.length; i > sumIdx; i--) {
            arr[i] = arr[i - 1];
        }

        arr[sumIdx] = sum;  // Insert sum
        idx = sumIdx + 1;   // Index of next set of numbers to add

        // Get the index for where to insert the next set's sum
        if (arr.length - sumIdx < 10) {
            sumIdx += arr.length - sumIdx;
        }
        else {
            sumIdx += 11;
        }
    }
}

// -- Double Trouble -- //
// Create a funciton that changes a given array to list each original element twice, retaining original order.
// Convert [4, "Ulysses", 42, false] to [4, 4, "Ulysses", "Ulysses", 42, 42, false, false].
function double(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        for (let x = arr.length; x > i; x--) {
            arr[x] = arr[x - 1];
        }
        arr[i + 1] = arr[i];
    }
    return arr;
}

const array = [3, 27, -15, 13, 13, 8, 8, 5];
const array2 = ['Aaa', 'bBb', 'ccC'];
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
// filterRange(array, 3, 12);
// console.log(arrConcat(array, array2));
// removeNegatives(array);
// console.log(secondToLast(array));
// console.log(secondLargest(array));
// console.log(nthToLast(array, 6));
// console.log(nthLargest(array, 4));
// shuffle(array);
// removeRange(array, 2, 5);
// intermediateSums(array);
double(array);
console.log(array);