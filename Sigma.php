<!-- Implement a function sigma(num) that, given a number, returns the sum of all positive integers from 1 up to number (inclusive). -->

<?php

function sigma($x) {
  if($x==1) {
    return $x;
  }
  else {
    return $x + sigma($x-1);
  }
}

echo sigma(3)."\n"; // prints 6
echo sigma(5); // prints 15

?>