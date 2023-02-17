import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import togglePassword from '../functions/passwordUtilities/TogglePassword';

// Props passed as Email, Password, and Id will be destructured
const PasswordLister = ({ email, password, id }) => {
  const { deletePassword } = useContext(PassContext);

  // Passwords will be hidden by stars until clicked
  return (
    <>
      <tr>
        <td>{email}</td>
        <td password={password} reveal='false' onClick={(e) => { togglePassword(e) }}>******</td>
        <td className="actionButtons">
          <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
          <button onClick={() => deletePassword(id)}>Delete</button>
        </td>
      </tr>
    </>
  )
}

export default PasswordLister
