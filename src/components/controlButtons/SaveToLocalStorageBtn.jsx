import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import encryptionForExport from '../functions/EncryptionForExport';
import requestMasterPassword from '../functions/passwordUtilities/RequestMasterPassword';

// All user entered passwords will be encrypted and saved to local storage
const SaveToLocalStorageBtn = () => {
  const { allPasswords } = useContext(PassContext);

  const saveLocally = () => {

    // Requests for a master password
    const masterPassword = requestMasterPassword();

    // Passwords are encrypted using the master password
    const data = encryptionForExport(allPasswords, masterPassword);

    // The encrypted passwords are saved to local storage
    localStorage.setItem('passwords', data);
  }

  return (
    <button onClick={() => saveLocally()}>
      Save
    </button>
  )
}

export default SaveToLocalStorageBtn
