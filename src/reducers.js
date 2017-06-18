import {CHANGE_SQUARE_COLOR} from './actions'

const initialNumOfRows = 8
const initialNumOfColumns = 8

const initialState = {
  numOfRows: initialNumOfRows,
  numOfColumns: initialNumOfColumns,
  canvas: createCanvas(initialNumOfRows, initialNumOfColumns)
}

function picaApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SQUARE_COLOR:
      let newCanvas = JSON.parse(JSON.stringify(state.canvas))
      newCanvas[action.cordinate[0]][action.cordinate[1]] = action.color
      let newState = Object.assign({}, state)
      newState.canvas = newCanvas
      return Object.assign({}, state, newState)
    default:
      return state
  }
}

function createCanvas(numOfRows, numOfColumns) {
  let canvas = new Array(numOfRows)
  for (var i=0; i < numOfRows; i++) {
    canvas[i] = new Array(numOfColumns).fill('blank')
  }
  return canvas
}

export default picaApp
