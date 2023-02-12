import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import importFromFile from '../functions/fileManagement/ImportFromFile';

const ImportBtn = () => {
  const { setPassword } = useContext(PassContext);

  return (
    <button className="Btn" onClick={() => importFromFile(setPassword)}>
      Import
    </button>
  )
}

export default ImportBtn
