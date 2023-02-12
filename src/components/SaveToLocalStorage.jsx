import PassContext from './contexts/PassContext';
import { useContext } from 'react';
import encrypt from './security/Encrypt';
import CryptoJs from 'crypto-js';

const SaveToLocalStorage = () => {
  const { allPasswords } = useContext(PassContext);

  const saveLocally = () => {
    const masterPassword = prompt('Enter master password');
    if (masterPassword == null) {
      return null;
    } else {
      let encryptedPasswords = allPasswords.map(credential => {
        return {
          email: encrypt(credential.email, masterPassword),
          password: encrypt(credential.password, masterPassword),
        }
      })
      encryptedPasswords = {
        md5: CryptoJs.MD5(masterPassword).toString(),
        passwords: encryptedPasswords
      }
      const data = JSON.stringify(encryptedPasswords);
      console.log(data)
      localStorage.setItem('passwords', data);
    }
  }

  return (
    <button onClick={() => saveLocally()}>
      Save
    </button>
  )
}

export default SaveToLocalStorage
