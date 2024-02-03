import FormWrapper from "./FormWrapper";

type Props = {
  firstname: string,
  lastname: string,
}

export default function FirstStepForm( {firstname, lastname, updateFields}: Props & {updateFields: (fields: Partial<Props>) => void} ) {

  return (
    <FormWrapper title="First Step">
      <label htmlFor='firstname'>First Name:</label>
      <input id="firstname" name="firstname" type='text' value={firstname} onChange={e=>updateFields({firstname: e.target.value})} required />
      <label htmlFor='lastname'>Last Name:</label>
      <input id="lastname" name="lastname" type='text' value={lastname} onChange={e=>updateFields({lastname:e.target.value})} required />
    </FormWrapper>
  )
}
