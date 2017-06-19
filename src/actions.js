export const CHANGE_SQUARE_COLOR = 'CHANGE_SQURE_COLOR'
export const ADD_COLOR_TO_PALETTE = 'ADD_COLOR_TO_PALETTE'
export const SET_CURRENT_COLOR = 'SET_CURRENT_COLOR'
export const changeSquareColor = function(cordinate) {
  return { type: CHANGE_SQUARE_COLOR, cordinate }
}

export const addColorToPalette = function(color) {
  return { type: ADD_COLOR_TO_PALETTE, color }
}

export const setCurrentColor = function(color) {
  return { type: SET_CURRENT_COLOR, color }
}
