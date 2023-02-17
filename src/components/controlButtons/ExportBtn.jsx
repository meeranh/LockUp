import exportToFile from '../functions/fileManagement/ExportToFile';
import PassContext from '../contexts/PassContext';
import { useContext } from 'react';

const ExportBtn = () => {
  const { allPasswords } = useContext(PassContext);

  return (
    // Exporting all passwords to an encrypted JSON file when clicked
    <button onClick={() => exportToFile(allPasswords)}>
      Export to file
    </button>
  )
}

export default ExportBtn
