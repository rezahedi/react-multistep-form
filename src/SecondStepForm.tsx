import FormWrapper from "./FormWrapper";

type Props = {
  lastname: string,
}

export default function SecondStepForm( {lastname, updateFields}: Props & {updateFields: (fields: Partial<Props>) => void} ) {
  return (
    <FormWrapper title="Second Step">
      <label htmlFor='lastname'>Last Name:</label>
      <input id="lastname" name="lastname" type='text' value={lastname} onChange={e=>updateFields({lastname:e.target.value})} required />
    </FormWrapper>
  )
}
