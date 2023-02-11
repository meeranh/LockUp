import PassContext from './contexts/PassContext';
import { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';

const PasswordForm = () => {
  const { register, control, handleSubmit } = useForm();
  const { newPassword } = useContext(PassContext);

  const handleSave = (e) => {
    newPassword(e.email, e.password);
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
        <input type="submit" className="FormSubmit" />
      </form>
    </div>
  )
}

export default PasswordForm
