import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import PassContext from '../contexts/PassContext';
import generatePassword from '../functions/passwordUtilities/GeneratePassword';

const PasswordForm = () => {
  const { newPassword } = useContext(PassContext);

  // Using React-Form for form management
  const { register, handleSubmit, setValue } = useForm();

  // Newly entered credentials will be saved to global context when submitted
  const handleSave = (e) => {
    newPassword(e.email, e.password);
  }

  // A random password will be generated and sent to the password field
  const setRandomPassword = () => {
    const randomPassword = generatePassword();
    setValue('password', randomPassword);
  }

  return (
    <form className="inputForm" onSubmit={handleSubmit(handleSave)}>
      <h4>Store a new password</h4>
      <section className="formInputFields">
        <label htmlFor="email">Email: </label>
        <input type="email" {...register('email')} required /><br />
        <label htmlFor="password">Password: </label>
        <input type="password" {...register('password')} required /><br />
      </section>
      <br />
      <section className="formButtons">
        <input type="submit" value="Store" />
        <button onClick={() => { setRandomPassword() }}>Generate</button>
      </section>
    </form>
  )
}

export default PasswordForm
