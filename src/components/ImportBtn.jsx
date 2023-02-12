import { useContext } from 'react';
import PassContext from './contexts/PassContext';
import CryptoJs from 'crypto-js';
import decrypt from './security/Decrypt';

const ImportBtn = () => {
  const { setPassword } = useContext(PassContext);

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
        const md5 = CryptoJs.MD5(masterPassword).toString();
        console.log(md5)
        const data = JSON.parse(content);
        console.log(data)
        if (data.md5 === md5) {
          data.passwords.forEach(credential => {
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
  }

  return (
    <button className="Btn" onClick={() => importFunction()}>
      Import
    </button>
  )
}

export default ImportBtn
