/* Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent 
that amount with smallest number of oincs. Common American coins are pennies (1 cent), nickels (5 cents), 
dimes (\*10 cents), and quarters (25 cents). */

function generateCoinChange(cents) {
    const quarters = Math.floor(cents / 25);
    let rem = cents % 25;
    const dimes = Math.floor(rem / 10);
    rem %= 10;
    const nickels = Math.floor(rem / 5);
    const pennies = rem % 5;

    console.log(`${cents} can be reprsented by:
    quarters: ${quarters}
    dimes: ${dimes}
    nickels: ${nickels}
    pennies: ${pennies}`);
}

generateCoinChange(94);

// Second: can you simplify/shorten your code?
function generateCoinChange(cents) {
    let rem = cents
    const coins = [25, 10, 5, 1];
    const change = []
    for (coin of coins) {
        change.push(Math.floor(rem / coin));
        rem %= coin;
    }

    console.log(`${cents} can be reprsented by:
    quarters: ${change[0]}
    dimes: ${change[1]}
    nickels: ${change[2]}
    pennies: ${change[3]}`);
}

generateCoinChange(94);

// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less
function generateCoinChange(cents) {
    let rem = cents
    const coins = [100, 50, 25, 10, 5, 1];
    const change = []
    for (coin of coins) {
        change.push(Math.floor(rem / coin));
        rem %= coin;
    }

    console.log(`${cents} can be reprsented by:
    dollars: ${change[0]}
    half-dolalrs: ${change[1]}
    quarters: ${change[2]}
    dimes: ${change[3]}
    nickels: ${change[4]}
    pennies: ${change[5]}`);
}

generateCoinChange(94);