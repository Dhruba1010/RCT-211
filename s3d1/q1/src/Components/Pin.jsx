import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import PinItem from './PinItem';
import PropTypes from 'prop-types';

const Pin = ({len, setCcHandler, maxLength}) => {
    const inputRef=useRef([])
    const [inputBoxLen] = useState(new Array(len).fill(0));
    const [inputBoxValue, setInputBoxValue] = useState(
        new Array(len).fill('')
    )

    const handleChange = (e, index) => {
        inputBoxValue[index] = e.target.value;
        setInputBoxValue(inputBoxValue);
        if(e.target.value.length > 4 && index < len-1){
            inputRef.current[index+1].focus();
        }
        setCcHandler(inputBoxValue.join(' '))
    }

    const handleBackspace = (e, index) => {
        if(index > 0 && e.target.value.length === 0){
            inputRef.current[index-1].focus();
        }
        inputBoxValue[index] = e.target.value;
        setInputBoxValue(inputBoxValue);
        setCcHandler(inputBoxValue.join(' '))
    }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        {inputBoxLen.map((i, index) => {
            return <PinItem key={index} ref={(el) => {
                inputRef.current[index] = el;
            }} changeHandler={e => handleChange(e, index)} 
            backspaceHandler={e => handleBackspace(e, index)}
            maxLength={maxLength}
            />
        })}
        
    </div>
  )
}

Pin.propTypes = {
    len: PropTypes.number.isRequired,
    setCcHandler: PropTypes.func,
    maxLength: PropTypes.number,
}

export default Pin