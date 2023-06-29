console.log(`
Question-1: Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

Example 1:

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

Output: [1,5]

Explanation: Only 1 and 5 appeared in the three arrays.
`);



//Programmm....

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 5, 7, 9];
let arr3 = [1, 3, 4, 5, 8];
let commonArray = [];

for (let i of arr1) {
    for (let j of arr2) {
        if (i == j) {
            for (let k of arr3) {
                if (j == k) {
                    commonArray.push(k);
                }
            }
        }
    }
}

console.log("The common element in all array : ", commonArray);