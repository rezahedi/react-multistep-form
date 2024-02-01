import FormWrapper from "./FormWrapper"

type Props = {
  age: string,
  email: string,
}

export default function ThirdStepForm( {age, email, updateFields}: Props & {updateFields: (fields: Partial<Props>) => void} ) {
  return (
    <FormWrapper title="Final Step">
      <label htmlFor='age'>Age:</label>
      <input id="age" name="age" type='number' value={age} onChange={e=>updateFields( {age: e.target.value} )} />
      <label htmlFor='email'>Email:</label>
      <input id="email" name="email" type='email' value={email} onChange={e=>updateFields( {email: e.target.value} )} required />
    </FormWrapper>
  )
}
