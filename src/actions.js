export const CHANGE_SQUARE_COLOR = 'CHANGE_SQURE_COLOR'

export const changeSquareColor = function(cordinate, color) {
  return { type: CHANGE_SQUARE_COLOR, cordinate, color}
}
