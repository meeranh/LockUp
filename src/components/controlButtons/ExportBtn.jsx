import exportToFile from '../functions/fileManagement/ExportToFile';
import PassContext from '../contexts/PassContext';
import { useContext } from 'react';

const ExportBtn = () => {
  const { allPasswords } = useContext(PassContext);

  return (
    <button className="Btn" onClick={() => exportToFile(allPasswords)}>
      Export
    </button>
  )
}

export default ExportBtn
