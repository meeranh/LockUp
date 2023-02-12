import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import decryptionForImport from '../functions/DecryptionForImport';

const LoadFromLocalStorageBtn = () => {
  const { setPassword } = useContext(PassContext);
  const data = localStorage.getItem('passwords');

  return (
    <button onClick={() => decryptionForImport(data, setPassword)}>
      Load
    </button>
  )
}

export default LoadFromLocalStorageBtn
