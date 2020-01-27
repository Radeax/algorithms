// Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function maxMinAvg(arr) {
  if (arr.length < 1) {
    return ("Array has no values.")
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i])
      min = arr[i];
    if (max < arr[i])
      max = arr[i];
    sum += arr[i];
  }

  avg = sum / arr.length;

  return ("The minimum is " + min + ", the maximum is " + max + ", and the average is " + avg + ".");
}

console.log(maxMinAvg([1, -2, 9, 4]));