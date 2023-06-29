console.log(`
Question 5: You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

Example 1:
Input: n = 5

Output: 2
`);

///////// Programmm......

let array = [
    ['$'],
    ['$', '$'],
    ['$', '$']
];
console.log(array);


function arrangeCoins(n) {
    let k = 0;
    while (n >= k) {
        n -= k;
        k++;
    }
    return k - 1;
}

// Example usage:
const n = 5;
const completeRows = arrangeCoins(n);
console.log("Incomplete row ", completeRows);