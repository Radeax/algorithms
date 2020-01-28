// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.

// HINT: Keep in mind that you may use arrays and objects to keep your information organized!

// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.

// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

function bracesValid(str) {
  let arr = [];
  for (const i of str) {
    if (i == '[' || i == '(' || i == '{') {
      arr.push(i);
    }
    else if (i == ')' && arr[arr.length - 1] != '(' ||
      i == ']' && arr[arr.length - 1] != '[' ||
      i == '{' && arr[arr.length - 1] != '}') {
      return false;
    }
    else {
      arr.pop();
    }
  }
  return (arr.length == 0);
}