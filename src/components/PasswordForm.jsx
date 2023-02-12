import PassContext from './contexts/PassContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

const PasswordForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { newPassword } = useContext(PassContext);

  const handleSave = (e) => {
    newPassword(e.email, e.password);
  }

  const generatePassword = () => {
    const length = 16;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setValue('password', retVal);
  }

  return (
    <div className="PassForm">
      <h4>Store a new password</h4>
      <form onSubmit={handleSubmit(handleSave)}>
        <p>
          <label htmlFor="email">Email: </label>
          <input type="email" {...register('email')} />
        </p>
        <br />
        <p>
          <label htmlFor="password">Password: </label>
          <input type="password" {...register('password')} />
        </p>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <input type="submit" className="FormSubmit" />
        </div>
      </form>
      <button onClick={() => {generatePassword()}}>Generate</button>
    </div>
  )
}

export default PasswordForm
