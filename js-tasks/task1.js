function isPalindrome(number) {
    let originalNumber = number;
    let reverse = 0;

    if (number < 0) {
        return false; 
    }

    while (number > 0) {
        let lastDigit = number % 10;  
        reverse = reverse * 10 + lastDigit;  
        number = Math.floor(number / 10);  
    }

    return originalNumber === reverse;  
}


let number = parseInt(prompt("Please enter a number:"));
console.log(isPalindrome(number));
