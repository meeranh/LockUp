import { useContext } from 'react';
import PassContext from './contexts/PassContext';

const PasswordLister = ({ email, password, id }) => {
  const { deletePassword } = useContext(PassContext);
  console.log(id);

  return (
    <>
      <tr>
        <td>{email}</td>
        <td>{password}</td>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
          <button onClick={() => deletePassword(id)}>Delete</button>
        </div>
      </tr>
    </>
  )
}

export default PasswordLister
