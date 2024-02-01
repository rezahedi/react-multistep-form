import React from 'react';
import './App.css';
import useMultistepForm from './useMultistepForm';

function App() {
  const {steps, currentStepIndex, step} = useMultistepForm([
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
        </form>
      </main>
    </div>
  );
}

export default App;
