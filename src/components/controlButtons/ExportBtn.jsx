import PassContext from '../contexts/PassContext';
import { useContext } from 'react';
import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

const ExportBtn = () => {
  const { allPasswords } = useContext(PassContext);

  return (
    // Exporting all passwords to an encrypted JSON file when clicked
    <button onClick={() => {clickedForSetter('ExportToFile') && showPasswordPrompt()}} className="text-white font-bold hover:text-yellow-400">
      Export to file
    </button>
  )
}

export default ExportBtn
