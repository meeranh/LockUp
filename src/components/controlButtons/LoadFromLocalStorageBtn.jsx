import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import decryptionForImport from '../functions/DecryptionForImport';

// Decrypting and loading all encrypted passwords from local storage
const LoadFromLocalStorageBtn = () => {
  const { setPassword } = useContext(PassContext);
  const data = localStorage.getItem('passwords');

  const checkForData = () => {
    if (data) {
      return true;
    } else {
      alert('No passwords found in local storage');
      return false;
    }
  }

  return (
    // Passwords stored in local storage will be decrypted and loaded when clicked
    <button onClick={() => checkForData() && decryptionForImport(data, setPassword)} className="text-white font-bold hover:text-yellow-400">
      Import from local storage
    </button>
  )
}

export default LoadFromLocalStorageBtn
