import React from 'react'

const Btn = ({onClick,color="yellow",className}) => {
  return (
    <div>
        <button>{color}</button>
    </div>
  )
}

export default Btn
