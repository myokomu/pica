import {CHANGE_SQUARE_COLOR, ADD_COLOR_TO_PALETTE,  SET_CURRENT_COLOR} from './actions'

const initialNumOfRows = 8
const initialNumOfColumns = 8
const initialColor = '#3498DB'

const initialState = {
  numOfRows: initialNumOfRows,
  numOfColumns: initialNumOfColumns,
  canvas: createCanvas(initialNumOfRows, initialNumOfColumns),
  palette: [initialColor],
  currentColor: initialColor
}

function picaApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SQUARE_COLOR:
      let newCanvas = JSON.parse(JSON.stringify(state.canvas))
      newCanvas[action.cordinate[0]][action.cordinate[1]] = state.currentColor
      return Object.assign({}, state, {canvas: newCanvas})

    case ADD_COLOR_TO_PALETTE:
      let newPalette = state.palette.slice()
      newPalette.push(action.color)
      return Object.assign({}, state, {palette: newPalette})

    case SET_CURRENT_COLOR:
      console.log(action.color)
      return Object.assign({}, state, {currentColor: action.color})

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
