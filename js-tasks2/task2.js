const nums = [1, 2, 3, 4, 5, 2]; 
let hasDuplicates = false;
let i = 0;
let length = nums.length;

while (i < length) {
    let j = i + 1; 
    while (j < length) {
        if (nums[i] === nums[j]) {
            hasDuplicates = true; 
            break; 
        }
        j++;
    }
    if (hasDuplicates) {
        break; 
    }
    i++;
}

console.log(hasDuplicates); 
