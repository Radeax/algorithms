<!-- Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). -->

<?php

function factorial($num) {
    if($num ==1) {
        return 1;
    }
    else {
        return $num * factorial($num - 1);
    }
}

echo factorial(3)."\n"; // prints 6 (or 1 * 2 * 3)
echo factorial(5); // prints 120 (or 1 * 2 * 3 * 4 * 5)

?>