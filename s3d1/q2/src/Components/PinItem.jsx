import React from 'react'
import { forwardRef } from 'react'

const PinItem = forwardRef(({changeHandler, backspaceHandler}, ref) => {
  const handleKeyUp = (e) => {
    if(e.keyCode === 8){
      backspaceHandler(e)
    }else{
      changeHandler(e)
    }
    
  }

  return (
    <div>
        <input maxLength={1} onKeyUp={handleKeyUp} ref={ref} />
    </div>
  )
})

export default PinItem