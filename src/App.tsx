import React from 'react';
import './App.css';
import useMultistepForm from './useMultistepForm';
import FirstStepForm from './FirstStepForm';
import SecondStepForm from './SecondStepForm';
import ThirdStepForm from './ThirdStepForm';

function App() {
  const {steps, currentStepIndex, step, previous, next, isFirstStep, isLastStep} = useMultistepForm([
    <FirstStepForm />,
    <SecondStepForm />,
    <ThirdStepForm />,
  ]);

  return (
    <div className='container'>
      <main>
        <div className='step'>{currentStepIndex + 1} / {steps.length}</div>
        <form>
          {step}
          <div className='actions'>
            {!isFirstStep && <button type='button' onClick={previous}>Previous</button>}
            <button type='button' onClick={next}>{isLastStep ? `Submit` : `Next`}</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
