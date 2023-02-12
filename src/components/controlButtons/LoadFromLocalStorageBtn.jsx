import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import decryptionForImport from '../functions/DecryptionForImport';

// Decrypting and loading all encrypted passwords from local storage
const LoadFromLocalStorageBtn = () => {
  const { setPassword } = useContext(PassContext);
  const data = localStorage.getItem('passwords');

  return (
    // Passwords stored in local storage will be decrypted and loaded when clicked
    <button onClick={() => decryptionForImport(data, setPassword)}>
      Load
    </button>
  )
}

export default LoadFromLocalStorageBtn
