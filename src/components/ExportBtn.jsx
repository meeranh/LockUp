import { useContext } from 'react';
import PassContext from './contexts/PassContext';
import CryptoJs from 'crypto-js';
import encrypt from './security/Encrypt';

const ExportBtn = () => {
  const { allPasswords } = useContext(PassContext);
  const reqMasterPassword = () => {
    const masterPassword = prompt('Enter master password');
    if (masterPassword == null) {
      return null;
    }
    return masterPassword;
  }

  const exportFunction = () => {
    const masterPassword = reqMasterPassword();
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
    console.log(encryptedPasswords);
    const data = JSON.stringify(encryptedPasswords);
    const blob = new Blob([data], { type: 'application/lockup' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'passwords.lockup';
    link.href = url;
    link.click();
  }

  return (
    <button className="Btn" onClick={() => exportFunction()}>
      Export
    </button>
  )
}

export default ExportBtn
