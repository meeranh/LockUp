import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

const ExportBtn = () => {

  return (
    // Exporting all passwords to an encrypted JSON file when clicked
    <button onClick={() => {clickedForSetter('ExportToFile') && showPasswordPrompt()}} className="text-white font-bold hover:text-yellow-400">
      Export to file
    </button>
  )
}

export default ExportBtn
