let userInput = prompt("Please enter something:");
let str = userInput.toString();
let reversedStr = str.split('').reverse().join('');

if (str === reversedStr) {
    console.log(true);
} else {
    console.log(false);
}
