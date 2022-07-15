import React, { useState } from 'react'
import Button from './Button';
import Header from './Header'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = (v: number) => {
        setCount(count+v);
    }

  return (
    <div>
        <Header label="Counter" />
        <Header label={`${count}`} />
        <Button label="Add" handleClick={() => handleClick(1)} />
        <Button label="Reduce" handleClick={() => handleClick(-1)} />
    </div>
  )
}

export default Counter