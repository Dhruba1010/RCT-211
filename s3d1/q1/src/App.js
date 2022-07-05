import { useState } from 'react';
import './App.css';
import Pin from './Components/Pin';


function App() {
  const [cc, setCc] = useState('');

  return (
    <div className="App">
      <Pin 
        len={4}
        maxLength={5}
        setCcHandler={v => setCc(v)}
      />
      <h4>Credit Card no is {cc}</h4>
    </div>
  );
}

export default App;
