import { useContext } from 'react';
import PasswordTable from './PasswordTable';
import PassContext from '../contexts/PassContext';

// If no passwords are available "No passwords stored" will be displayed, else, they will be passed as props
const StoredPasswords = () => {
  const { allPasswords } = useContext(PassContext);

  return (
    <section className="passwordList">
      <h4>All recorded passwords</h4>
      {allPasswords.length == 0 ? 
        <h5 className="emptyPlaceholder">No passwords stored</h5> : <PasswordTable data={allPasswords} />}
    </section>
  )
}

export default StoredPasswords
