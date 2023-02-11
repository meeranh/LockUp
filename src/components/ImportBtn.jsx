import { useContext } from 'react';
import PassContext from './contexts/PassContext';
import { Md5 } from 'ts-md5/dist/md5';
import CryptoJs from 'crypto-js';

const ImportBtn = () => {
  const { newPassword, allPasswords } = useContext(PassContext);

  const decrypt = (hash, masterPass) => {
    const bytes = CryptoJs.AES.decrypt(hash, masterPass);
    const originalText = bytes.toString(CryptoJs.enc.Utf8);
    return originalText;
  }

  const importFunction = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'application/lockup';
    fileInput.click();
    fileInput.onchange = () => {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = readerEvent => {
        const content = readerEvent.target.result;
        const masterPassword = prompt('Enter master password');
        if (masterPassword == null) {
          return null;
        }
        const md5 = Md5.hashStr(masterPassword);
        const data = JSON.parse(content);
        if (data.md5 === md5) {
          data.passwords.forEach(credential => {
            newPassword(decrypt(credential.email, masterPassword), decrypt(credential.password, masterPassword));
          })
        } else {
          alert('Wrong master password');
        }
      }
    }
  }

  return (
    <button className="Btn" onClick={() => importFunction()}>
      Import
    </button>
  )
}

export default ImportBtn
