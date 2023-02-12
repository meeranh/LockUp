import PassContext from './contexts/PassContext';
import { useContext } from 'react';
import CryptoJs from 'crypto-js';
import decrypt from './security/Decrypt';

const LoadFromLocalStorage = () => {
  const { setPassword, allPasswords } = useContext(PassContext);

  const loadPasswords = () => {
    const masterPassword = prompt('Enter master password');
    const md5 = CryptoJs.MD5(masterPassword).toString();
    if (masterPassword == null) {
      return null;
    } else {
      const data = localStorage.getItem('passwords');
      const encryptedPasswords = JSON.parse(data);
      if (encryptedPasswords.md5 === md5) {
        encryptedPasswords.passwords.forEach(credential => {
          setPassword(prev => [...prev, {
            email: decrypt(credential.email, masterPassword),
            password: decrypt(credential.password, masterPassword)
          }])
        })
      } else {
        alert('Wrong master password');
      }
    }
  }

  return (
    <button onClick={() => loadPasswords()}>
      Load
    </button>
  )
}

export default LoadFromLocalStorage
