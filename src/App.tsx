import React from 'react';
import './App.css';
import useMultistepForm from './useMultistepForm';

function App() {
  const {steps, currentStepIndex, step, previous, next} = useMultistepForm([
    <div>One</div>,
    <div>Two</div>,
    <div>Three</div>,
  ]);

  return (
    <div className='container'>
      <main>
        <div className='step'>{currentStepIndex + 1} / {steps.length}</div>
        <form>
          {step}
          <div className='actions'>
            <button type='button' onClick={previous}>Previous</button>
            <button type='button' onClick={next}>Next</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
