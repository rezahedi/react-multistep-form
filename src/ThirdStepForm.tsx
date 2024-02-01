import FormWrapper from "./FormWrapper"

export default function ThirdStepForm() {
  return (
    <FormWrapper title="Final Step">
      <label htmlFor='age'>Age:</label>
      <input id="age" name="age" type='number' />
      <label htmlFor='email'>Email:</label>
      <input id="email" name="email" type='email' required />
    </FormWrapper>
  )
}
