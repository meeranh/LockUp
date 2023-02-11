import DataBody from './PasswordTable';
import PassContext from './contexts/PassContext';
import { useContext } from 'react';

const StoredPasswords = () => {
  const { allPasswords } = useContext(PassContext);

  return (
    <div className="StoredPass">
      <h4>All recorded passwords</h4>
      <br />
      {allPasswords.length == 0 ? <p>No passwords stored</p> : <DataBody data={allPasswords} />}
    </div>
  )
}

export default StoredPasswords
