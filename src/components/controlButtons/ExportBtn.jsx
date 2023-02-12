import exportToFile from '../functions/fileManagement/ExportToFile';
import PassContext from '../contexts/PassContext';
import { useContext } from 'react';

const ExportBtn = () => {
  const { allPasswords } = useContext(PassContext);

  return (
    // Exporting all passwords to an encrypted JSON file when clicked
    <button className="Btn" onClick={() => exportToFile(allPasswords)}>
      Export
    </button>
  )
}

export default ExportBtn
