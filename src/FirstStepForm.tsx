import FormWrapper from "./FormWrapper";

type Props = {
  name: string,
}

export default function FirstStepForm( {name, updateFields}: Props & {updateFields: (fields: Partial<Props>) => void} ) {

  return (
    <FormWrapper title="First Step">
      <label htmlFor='name'>Name:</label>
      <input id="name" name="name" type='text' value={name} onChange={e=>updateFields({name: e.target.value})} required />
    </FormWrapper>
  )
}
