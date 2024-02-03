import FormWrapper from "./FormWrapper"

type Props = {
  email: string,
  password: string,
}

export default function ThirdStepForm( {email, password, updateFields}: Props & {updateFields: (fields: Partial<Props>) => void} ) {
  return (
    <FormWrapper title="Final Step">
      <label htmlFor='email'>Email:</label>
      <input id="email" name="email" type='email' value={email} onChange={e=>updateFields( {email: e.target.value} )} required />
      <label htmlFor='password'>Password:</label>
      <input id="password" name="password" type='password' value={password} onChange={e=>updateFields( {password: e.target.value} )} />
    </FormWrapper>
  )
}
