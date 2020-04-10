/* From StarArt.js, derive the following that accept and draw the given characters, not just asterisks.
For all three of these, you can safely assume that 'char' is a string with length 1 */

function drawLeftChars(num, char) {
    let stars = '';
    for (let i = 0; i < num && i < 75; i++) {
        stars += char;
    }
    console.log(stars);
}

function drawRightChars(num, char) {
    let remainder = 75 - num;
    let spaces = '';
    let stars = '';
    for (let i = 0; i < num && i < 75; i++) {
        stars += char;
    }
    for (let i = 0; i < remainder; i++) {
        spaces += ' ';
    }
    console.log(spaces + stars);
}

function drawCenteredChars(num, char) {
    let remainder = 75 - num;
    let spaces = '';
    let stars = '';
    for (let i = 0; i < num && i < 75; i++) {
        stars += char;
    }
    for (let i = 0; i < remainder / 2; i++) {
        spaces += ' ';
    }
    console.log(spaces + stars);
}

function drawChars() {
    drawLeftChars(1, 'a');
    drawLeftChars(2, 'b');
    drawLeftChars(3, 'c');
    drawLeftChars(4, 'd');
    drawLeftChars(5, 'e');
    drawCenteredChars(75, 'c');
    drawCenteredChars(1, 'e');
    drawCenteredChars(2, 'n');
    drawCenteredChars(4, 't');
    drawLeftChars(37, '*');
    drawCenteredChars(1, 'e');
    drawRightChars(37, '!');
    drawCenteredChars(3, 'r');
    drawCenteredChars(75, '!');
    drawRightChars(5, 'a');
    drawRightChars(4, 'b');
    drawRightChars(3, 'c');
    drawRightChars(2, 'e');
    drawRightChars(1, 'f');
}

drawChars();