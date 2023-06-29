console.log(`
Question 3: Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]
`);

/// Programm.....


function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    // console.log(rows);
    // console.log(cols);

    // Create a new empty matrix with flipped dimensions
    const transposed = new Array(cols);
    for (let i = 0; i < cols; i++) {
        transposed[i] = new Array(rows);

    }
    // console.log(transposed);

    // Swap elements from original matrix to transposed matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
}


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposedMatrix = transpose(matrix);
console.log(transposedMatrix);