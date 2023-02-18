import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

const ImportBtn = () => {

  return (
    // Importing passwords from an encrypted JSON file
    <button onClick={() => {clickedForSetter('ImportFromFile') && showPasswordPrompt()}} className="text-white font-bold hover:text-yellow-400">
      Import from file
    </button>
  )
}

export default ImportBtn
