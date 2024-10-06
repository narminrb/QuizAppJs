function checkForDuplicates(nums) {
    let hasDuplicates = false;
    let length = nums.length;
    let i = 0;

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

    return hasDuplicates;   
}


const nums = [1, 2, 3, 4, 5];
console.log(checkForDuplicates(nums));  

