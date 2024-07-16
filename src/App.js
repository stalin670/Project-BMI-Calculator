import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(140);

  function onWeightChange(e) {
    setWeight(e.target.value);
  }

  function onHeightChange(e) {
    setHeight(e.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;

    const bmi = (weight / (calculateHeight * calculateHeight)).toFixed(1);

    return bmi;

  }, [weight, height])

  return (
    <main>
      <h1>Project : BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight : {weight} kg</p>
        <input className='input-slider' type='range' step='1' min='40' max='200'
        onChange={onWeightChange}/>
        <p className='slider-output'>Height : {height} cm</p>
        <input className='input-slider' type='range' step='1' min='140' max='220'
        onChange={onHeightChange}/>
      </div>
      <div className='output-section'>
        <p>Your BMI is </p>
        <p className='output'>{output}</p>
      </div>
    </main>
  );
}

export default App;