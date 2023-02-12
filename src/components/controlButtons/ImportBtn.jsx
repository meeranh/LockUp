import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import importFromFile from '../functions/fileManagement/ImportFromFile';

const ImportBtn = () => {
  const { setPassword } = useContext(PassContext);

  return (
    // Importing passwords from an encrypted JSON file
    <button className="Btn" onClick={() => importFromFile(setPassword)}>
      Import
    </button>
  )
}

export default ImportBtn
