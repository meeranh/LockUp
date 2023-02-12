import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import togglePassword from '../functions/passwordUtilities/TogglePassword';

const PasswordLister = ({ email, password, id }) => {
  const { deletePassword } = useContext(PassContext);

  return (
    <>
      <tr>
        <td>{email}</td>
        <td password={password} reveal='false' onClick={(e) => {togglePassword(e)}}>******</td>
        <td style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
          <button onClick={() => deletePassword(id)}>Delete</button>
        </td>
      </tr>
    </>
  )
}

export default PasswordLister
