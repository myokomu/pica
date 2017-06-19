export const CHANGE_SQUARE_COLOR = 'CHANGE_SQURE_COLOR'
export const ADD_COLOR_TO_PALETTE = 'ADD_COLOR_TO_PALETTE'
export const SET_CURRENT_COLOR = 'SET_CURRENT_COLOR'

export const changeSquareColor = cordinate =>
  ({ type: CHANGE_SQUARE_COLOR, cordinate })

export const addColorToPalette = color =>
  ({ type: ADD_COLOR_TO_PALETTE, color })

export const setCurrentColor = color =>
  ({ type: SET_CURRENT_COLOR, color })
