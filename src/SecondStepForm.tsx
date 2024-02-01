import FormWrapper from "./FormWrapper";

export default function SecondStepForm() {
  return (
    <FormWrapper title="Second Step">
      <label htmlFor='lastname'>Last Name:</label>
      <input id="lastname" name="lastname" type='text' required />
    </FormWrapper>
  )
}
