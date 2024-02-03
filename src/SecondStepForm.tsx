import FormWrapper from "./FormWrapper";

type Props = {
  age: string,
  birthdate: string,
}

export default function SecondStepForm( {age, birthdate, updateFields}: Props & {updateFields: (fields: Partial<Props>) => void} ) {
  return (
    <FormWrapper title="Second Step">
      <label htmlFor='age'>Age:</label>
      <input id="age" name="age" type='number' value={age} onChange={e=>updateFields({age: e.target.value})} required />
      <label htmlFor='birthdate'>Birth Date:</label>
      <input id="birthdate" name="birthdate" type='text' value={birthdate} onChange={e=>updateFields({birthdate:e.target.value})} required />
    </FormWrapper>
  )
}
