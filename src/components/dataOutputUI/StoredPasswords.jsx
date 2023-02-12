import { useContext } from 'react';
import PasswordTable from './PasswordTable';
import PassContext from '../contexts/PassContext';

// If no passwords are available "No passwords stored" will be displayed, else, they will be passed as props
const StoredPasswords = () => {
  const { allPasswords } = useContext(PassContext);

  return (
    <div className="StoredPass">
      <h4>All recorded passwords</h4>
      <br />
      {allPasswords.length == 0 ? <p>No passwords stored</p> : <PasswordTable data={allPasswords} />}
    </div>
  )
}

export default StoredPasswords
