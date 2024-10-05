let number = parseInt(prompt("Please enter a number:")); 
let originalNumber = number;
let reverse = 0;

if (number < 0) {
    console.log(false);
} else {
    while (number > 0) {
        let lastDigit = number % 10; 
        reverse = reverse * 10 + lastDigit; 
        number = Math.floor(number / 10); 
    }
    console.log(originalNumber === reverse); 
}
