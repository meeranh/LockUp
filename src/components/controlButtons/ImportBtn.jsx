import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import importFromFile from '../functions/fileManagement/ImportFromFile';

const ImportBtn = () => {
  const { setPassword } = useContext(PassContext);

  return (
    // Importing passwords from an encrypted JSON file
    <button onClick={() => importFromFile(setPassword)}>
      Import from file
    </button>
  )
}

export default ImportBtn
