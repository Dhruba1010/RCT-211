import { useState } from 'react';
import './App.css';
import Pin from './Components/Pin';

function App() {
  const [otp, setOtp] = useState('');

  return (
    <div className="App">
      <Pin
        len={5}
        setOtpHandler={v => setOtp(v)}
      />
      <h4>OTP is {otp}</h4>
    </div>
  );
}

export default App;
