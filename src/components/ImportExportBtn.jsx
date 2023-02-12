import ImportBtn from './ImportBtn';
import ExportBtn from './ExportBtn'
import SaveLocal from './SaveToLocalStorage';
import LoadLocal from './LoadFromLocalStorage';

const ImportExportBtn = () => {
  return (
    <div className="BtnRow">
      <center>
        <ImportBtn />
        <ExportBtn />
        <SaveLocal />
        <LoadLocal />
      </center>
    </div>
  )
}

export default ImportExportBtn
