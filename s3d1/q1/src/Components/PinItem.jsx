import React from 'react'
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PinItem = forwardRef(({changeHandler, backspaceHandler, maxLength},  ref) => {
    const handleKeyUp = (e) => {
        if(e.keyCode === 8){
            backspaceHandler(e);
        }else{
            changeHandler(e);
        }
    }

  return (
    <div>
        <input maxLength={maxLength} ref={ref} onKeyUp={handleKeyUp} />
    </div>
  )
})

PinItem.propTypes = {
    changeHandler: PropTypes.func,
    backspaceHandler: PropTypes.func,
    maxLength: PropTypes.number,
}

export default PinItem