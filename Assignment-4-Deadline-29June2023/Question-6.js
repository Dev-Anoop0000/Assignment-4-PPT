console.log(`
Question 6: Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10];

Output: [0,1,9,16,100];

Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100];
`);


//// Programmmm.....
let nums = [-4, -1, 0, 3, 10];
console.log(nums);
for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
}

// console.log(nums)

nums = nums.sort((a, b) => { return a - b });
console.log(nums)