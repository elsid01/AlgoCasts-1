// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const arr = [];
  let stRow = 0;
  let stCol = 0;
  let endRow = n - 1;
  let endCol = n - 1;
  let count = 1;

  for(let i = 0; i < n ; i++ ){
    arr.push([]);
  }
  while(stRow <= endRow && stCol <= endCol){
    for(let i = stCol; i <= endCol; i++){
      arr[stRow][i] = count;
      count++;
    }

    stRow++

    for(let i = stRow; i <= endRow; i++){
      arr[i][endCol] = count;
      count++;
    }

    endCol--;

    for(let i = endCol; i >= stCol; i--){
      arr[endRow][i] = count;
      count++;
    }
    endRow--;

    for(let i = endRow; i >= stRow; i--){
      arr[i][stCol] = count;
      count++
    }
    stCol++
  }
  
  return arr;

}

module.exports = matrix;
