import ImportBtn from './controlButtons/ImportBtn';
import ExportBtn from './controlButtons/ExportBtn'
import SaveLocalBtn from './controlButtons/SaveToLocalStorageBtn';
import LoadLocalBtn from './controlButtons/LoadFromLocalStorageBtn';

const TopButtons = () => {
  return (
    <div className="BtnRow">
      <center>
        <ImportBtn />
        <ExportBtn />
        <SaveLocalBtn />
        <LoadLocalBtn />
      </center>
    </div>
  )
}

export default TopButtons
