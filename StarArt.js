/* Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.*/
function drawLeftStars(num) {
    let stars = '';
    for (let i = 0; i < num && i < 75; i++) {
        stars += '*';
    }
    console.log(stars);
}

/* Write a function drawRightStars(num) that prints 75 characters total. Stars should build
from right side. The last num characters should be asterisks; the other 75 should be spaces. */
function drawRightStars(num) {
    let remainder = 75 - num;
    let spaces = '';
    let stars = '';
    for (let i = 0; i < num && i < 75; i++) {
        stars += '*';
    }
    for (let i = 0; i < remainder; i++) {
        spaces += ' ';
    }
    console.log(spaces + stars);
}

/* Write function drawCenteredStars(num) that prints 75 characters total. The stars should be
centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces. */
function drawCenteredStars(num) {
    let remainder = 75 - num;
    let spaces = '';
    let stars = '';
    for (let i = 0; i < num && i < 75; i++) {
        stars += '*';
    }
    for (let i = 0; i < remainder / 2; i++) {
        spaces += ' ';
    }
    console.log(spaces + stars);
}

function drawStars() {
    drawLeftStars(1);
    drawLeftStars(2);
    drawLeftStars(3);
    drawLeftStars(4);
    drawLeftStars(5);
    drawCenteredStars(75);
    drawCenteredStars(1);
    drawCenteredStars(2);
    drawCenteredStars(4);
    drawLeftStars(37);
    drawCenteredStars(1);
    drawRightStars(37);
    drawCenteredStars(3);
    drawCenteredStars(75);
    drawRightStars(5);
    drawRightStars(4);
    drawRightStars(3);
    drawRightStars(2);
    drawRightStars(1);
}

drawStars();