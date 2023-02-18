import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import SaveToLocalStorage from '../functions/fileManagement/SaveToLocalStorage';

// All user entered passwords will be encrypted and saved to local storage
const SaveToLocalStorageBtn = () => {
  const { allPasswords } = useContext(PassContext);

  return (
    <button onClick={() => SaveToLocalStorage(allPasswords)} className="text-white font-bold hover:text-yellow-400">
      Export to local storage
    </button>
  )
}

export default SaveToLocalStorageBtn
