import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import encryptionForExport from '../functions/EncryptionForExport';
import requestMasterPassword from '../functions/passwordUtilities/RequestMasterPassword';

const SaveToLocalStorageBtn = () => {
  const { allPasswords } = useContext(PassContext);

  const saveLocally = () => {
    const masterPassword = requestMasterPassword();
    const data = encryptionForExport(allPasswords, masterPassword);
    localStorage.setItem('passwords', data);
  }

  return (
    <button onClick={() => saveLocally()}>
      Save
    </button>
  )
}

export default SaveToLocalStorageBtn
