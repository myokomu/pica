export const CHANGE_SQUARE_COLOR = 'CHANGE_SQURE_COLOR'
export const ADD_COLOR_TO_PALETTE = 'ADD_COLOR_TO_PALETTE'

export const changeSquareColor = function(cordinate, color) {
  return { type: CHANGE_SQUARE_COLOR, cordinate, color}
}

export const addColorToPalette = function(color) {
  return { type: ADD_COLOR_TO_PALETTE, color }
}
