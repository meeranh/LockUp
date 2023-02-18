import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

// All user entered passwords will be encrypted and saved to local storage
const SaveToLocalStorageBtn = () => {

  return (
    <button onClick={() => {clickedForSetter('SaveToLocalStorage') && showPasswordPrompt()}} className="text-white font-bold hover:bg-red-900 bg-red-600 rounded px-2 py-1 my-2 sm:my-0">
      Export to browser storage
    </button>
  )
}

export default SaveToLocalStorageBtn
