/*
Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number
is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument,
an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four
later, etc). Examples: fibonacci(0) = 0 (given), fibonacci (1) = 1 (given), fibonacci(2) = 1
(fib(0) + fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2), or 1+1), fibonacci(4) = 3
(1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.
*/

// With recursion
function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return (fibonacci(num - 1) + fibonacci(num - 2));
}

// Without recursion
function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    let fib1 = 0;
    let fib2 = 1;
    for (let i = 2; i <= num; i++) {
        current = fib1 + fib2;
        fib1 = num2;
        fib2 = current;
    }
    return current;
}

console.log(fibonacci(7));