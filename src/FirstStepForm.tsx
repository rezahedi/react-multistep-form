import FormWrapper from "./FormWrapper";

export default function FirstStepForm() {
  return (
    <FormWrapper title="First Step">
      <label htmlFor='name'>Name:</label>
      <input id="name" name="name" type='text' required />
    </FormWrapper>
  )
}
