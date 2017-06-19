import React, {PropTypes} from 'react'

const Canvas = ({canvas, blockColorPlaceholder, onClick}) =>
  <div className='canvas'>
    {canvas.map((row, i) =>
      <div className='row' key={i}>
        {row.map((blockColor, j)=>
          <div onClick={()=>(onClick([i,j]))}
               style={setBackground(blockColor, blockColorPlaceholder)}
               className="block"
               key={j}>
          </div>
        )}
      </div>
    )}
  </div>

Canvas.propTypes = {
  canvas: PropTypes.array.isRequired,
  blockColorPlaceholder: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

function setBackground(color, placeholder) {
  if (color !== placeholder) {
    return({background: color})
  }}

export default Canvas
