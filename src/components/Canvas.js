import React, {PropTypes} from 'react'

const setBackground = (color, placeholder) => {
  if (color !== placeholder) {
    return({background: color})
  }}

const Canvas = ({canvas, blockColorPlaceholder, onClick}) => {
  return(
    <div className='canvas'>
      {canvas.map((row, i) => {
        return(
          <div className='row' key={i}>
            {row.map((blockColor, j)=>{
              return(
                <div onClick={()=>(onClick([i,j]))}
                     style={setBackground(blockColor, blockColorPlaceholder)}
                     className="block"
                     key={j}>
                </div>
              )})}
          </div>
        )})}
    </div>
  )}

Canvas.propTypes = {
  canvas: PropTypes.array.isRequired,
  blockColorPlaceholder: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Canvas
