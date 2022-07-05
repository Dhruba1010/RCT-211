import React, { useState } from 'react'
import { useRef } from 'react';
import PinItem from './PinItem';
import PropTypes from 'prop-types';

const Pin = ({len, setOtpHandler}) => {
  const inputRef = useRef([]);
  const [inputBoxLen] = useState(new Array(len).fill(0));
  const [inputBoxValue, setInputBoxValue] = useState(
    new Array(len).fill('')
  )

  const handleChange = (e, index) => {
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue)
    if(e.target.value.length > 0 && index < len-1){
      inputRef.current[index+1].focus();
    }
    setOtpHandler(inputBoxValue.join(''))
  }

  const handleBackspace = (e, index) => {
    if(index > 0){
      inputRef.current[index-1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue)
    setOtpHandler(inputBoxValue.join(''))
  }

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData('text').split('').filter((i, index) => index < len);
    data.forEach((v, index) => {
      inputBoxValue[index] = v;
      inputRef.current[index].value = v; 
      if(index < len-1){
        inputRef.current[index+1].focus();
      }
    })
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}} onPaste={handlePaste} >
        {inputBoxLen.map((i, index) => {
            return <PinItem key={index} ref={(el) => {
              inputRef.current[index] = el;
            }}  changeHandler={e => handleChange(e, index)} backspaceHandler={e => handleBackspace(e, index)} />
        })}
        
    </div>
  )
}

Pin.propTypes = {
  len: PropTypes.number,
  setOtpHandler: PropTypes.func,
}

export default Pin