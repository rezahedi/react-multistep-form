import React from 'react';
import './App.css';
import useMultistepForm from './useMultistepForm';
import FirstStepForm from './FirstStepForm';
import SecondStepForm from './SecondStepForm';
import ThirdStepForm from './ThirdStepForm';

type DataProps = {
  name: string,
  lastname: string,
  age: string,
  email: string,
}

const INITIAL_DATA: DataProps = {
  name: '',
  lastname: '',
  age: '',
  email: '',
}

function App() {
  const [data, setData] = React.useState(INITIAL_DATA);
  const {steps, currentStepIndex, step, previous, next, isFirstStep, isLastStep} = useMultistepForm([
    <FirstStepForm {...data} updateFields={updateFields} />,
    <SecondStepForm {...data} updateFields={updateFields} />,
    <ThirdStepForm {...data} updateFields={updateFields} />,
  ]);

  function updateFields(fields: Partial<DataProps>) {
    setData((prev) => ({...prev, ...fields}));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isLastStep)
      return next();

    console.log(data)
  }

  return (
    <div className='container'>
      <main>
        <div className='step'>{currentStepIndex + 1} / {steps.length}</div>
        <form onSubmit={handleSubmit}>
          {step}
          <div className='actions'>
            {!isFirstStep && <button type='button' onClick={previous}>Previous</button>}
            <button type='submit'>{isLastStep ? `Submit` : `Next`}</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
