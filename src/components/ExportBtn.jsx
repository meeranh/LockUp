import { useContext } from 'react';
import PassContext from './contexts/PassContext';
import jsSHA from 'jssha';

const ExportBtn = () => {
  const { allPasswords } = useContext(PassContext);
  const reqMasterPassword = () => {
    const masterPassword = prompt('Enter master password');
    if (masterPassword == null) {
      return null;
    }
    return masterPassword;
  }

  const encrypt = (text, key) => {
    const shaObj = new jsSHA("SHA-512", "TEXT");
    shaObj.setHMACKey(key, "TEXT");
    shaObj.update(text);
    console.log(shaObj.getHMAC("HEX"))
    return shaObj.getHMAC("HEX");
  }

  const exportFunction = () => {
    const masterPassword = reqMasterPassword();
    const encryptedPasswords = allPasswords.map(credential => {
      return {
        email: encrypt(credential.email, masterPassword),
        password: encrypt(credential.password, masterPassword)
      }
    })
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
