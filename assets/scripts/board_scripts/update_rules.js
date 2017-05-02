const board = require('../boardStore')
const boardSize = 27

const flipValue = function (cell) {
  if (cell.intialValue === 1) {
    return 2
  } else {
    return 1
  }
}

const doesCellExist = function(num) {
  let result
  if(num < 0) {
    result = false
  } else if (num > boardSize ){
    result = false
  } else if (num === NaN) {
    false
  }else {result = true}
  return result
}

const createBordarArray = function(cell) {
  // create array of bording cells
  const borderCells = []

  const topLeftX = (cell.xCord * 1) - 1
  const topLeftY = cell.yCord - 1
  if(doesCellExist(topLeftX) && doesCellExist(topLeftY)){
    borderCells.push(board.cellsStore[topLeftX][topLeftY].intialValue)
  }

  const midLeftX = cell.xCord
  const midLeftY = cell.yCord - 1
  if(doesCellExist(midLeftX) && doesCellExist(midLeftY)){
    borderCells.push(board.cellsStore[midLeftX][midLeftY].intialValue)
  }

  const botLeftX = cell.xCord + 1
  const botLeftY = cell.yCord - 1
  if(doesCellExist(botLeftX) && doesCellExist(botLeftY)){
    borderCells.push(board.cellsStore[botLeftX][botLeftY].intialValue)
  }

  const topMidX = cell.xCord - 1
  const topMidY = cell.yCord
  if(doesCellExist(topMidX) && doesCellExist(topMidY)){
    borderCells.push(board.cellsStore[topMidX][topMidY].intialValue)
  }


  const botMidX = cell.xCord + 1
  const botMidY = cell.yCord
  if(doesCellExist(botMidX) && doesCellExist(botMidY)){
    borderCells.push(board.cellsStore[botMidX][botMidY].intialValue)
  }

  const topRightX = cell.xCord -1
  const topRightY = cell.yCord + 1
  if(doesCellExist(topRightX) && doesCellExist(topRightY)){
    borderCells.push(board.cellsStore[topRightX][topRightY].intialValue)
  }

  const midRightX = cell.xCord
  const midRightY = cell.yCord + 1
  if(doesCellExist(midRightX) && doesCellExist(midRightY)){
    borderCells.push(board.cellsStore[midRightX][midRightY].intialValue)
  }

  const botRightX = cell.xCord + 1
  const botRightY = cell.yCord + 1
  if(doesCellExist(botRightX) && doesCellExist(botRightY)){
    borderCells.push(board.cellsStore[botRightX][botRightY].intialValue)
  }
  return borderCells

  // count how many cells are of value "2"
  // update accordingly
}
const isAlive = function (value) {
  return value > 1;
}

const conwaysRules = function(cell) {
  const testArray = createBordarArray(cell)
  const arrayForChecking = testArray.filter(isAlive)


  if (arrayForChecking.length < 2) {
    return 1
  }else if (arrayForChecking.length > 3 ) {
    return 1
  } else if (arrayForChecking.length === 3) {
    return 2
  }
  else {return cell.intialValue}

  // return testArray
}
module.exports = {
  flipValue,
  createBordarArray,
  conwaysRules
}
