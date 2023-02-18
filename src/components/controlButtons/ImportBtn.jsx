import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

const ImportBtn = () => {

  return (
    // Importing passwords from an encrypted JSON file
    <button onClick={() => {clickedForSetter('ImportFromFile') && showPasswordPrompt()}} className="text-white font-bold hover:bg-red-900 bg-red-600 rounded px-2 py-1 my-2 sm:my-0">
      Import from file
    </button>
  )
}

export default ImportBtn
