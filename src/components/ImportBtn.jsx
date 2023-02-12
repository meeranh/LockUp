import { useContext } from 'react';
import PassContext from './contexts/PassContext';
import { Md5 } from 'ts-md5/dist/md5';
import decrypt from './Security/Decrypt';

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
        const md5 = Md5.hashStr(masterPassword);
        const data = JSON.parse(content);
        console.log(data)
        if (data.md5 === md5) {
          data.passwords.forEach(credential => {
            setPassword(prev => [...prev, {
              email: decrypt(credential.email, masterPassword),
              password: decrypt(credential.password, masterPassword)
            }])
            console.log(decrypt(credential.email, masterPassword), decrypt(credential.password, masterPassword));
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
