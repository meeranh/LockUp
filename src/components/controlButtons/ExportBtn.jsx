import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

const ExportBtn = () => {

  return (
    // Exporting all passwords to an encrypted JSON file when clicked
    <button onClick={() => {clickedForSetter('ExportToFile') && showPasswordPrompt()}} className="text-white font-bold hover:bg-red-900 bg-red-600 rounded px-2 py-1 my-2 sm:my-0">
      Export to file
    </button>
  )
}

export default ExportBtn
