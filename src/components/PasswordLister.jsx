import { useContext } from 'react';
import PassContext from './contexts/PassContext';

const PasswordLister = ({ email, password, id }) => {
  const { deletePassword } = useContext(PassContext);

  const togglePassword = (e) => {
    if (e.target.getAttribute('reveal') === 'false') {
      e.target.innerHTML = e.target.getAttribute('password');
      e.target.setAttribute('reveal', 'true');
    } else {
      e.target.innerHTML = '******';
      e.target.setAttribute('reveal', 'false');
    }
  }

  return (
    <>
      <tr>
        <td>{email}</td>
        <td password={password} reveal='false' onClick={(e) => {togglePassword(e)}}>******</td>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
          <button onClick={() => deletePassword(id)}>Delete</button>
        </div>
      </tr>
    </>
  )
}

export default PasswordLister
