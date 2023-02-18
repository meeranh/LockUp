import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

// All user entered passwords will be encrypted and saved to local storage
const SaveToLocalStorageBtn = () => {

  return (
    <button onClick={() => {clickedForSetter('SaveToLocalStorage') && showPasswordPrompt()}} className="text-white font-bold hover:text-yellow-400">
      Export to browser storage
    </button>
  )
}

export default SaveToLocalStorageBtn
