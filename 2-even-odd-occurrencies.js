console.log(
  getLargerOccurrencies(
    [
      [1, 3],
      [1, 7],
    ],
    2,
    2
  )
)

function getLargerOccurrencies(matrix, rows, columns) {
  let amountEven = 0
  let amountOdd = 0

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const number = matrix[r][c]

      if (number % 2 === 0) {
        amountEven++
      } else {
        amountOdd++
      }
    }
  }

  return amountEven > amountOdd ? amountEven : amountOdd
}
