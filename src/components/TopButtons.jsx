import ImportBtn from './controlButtons/ImportBtn';
import ExportBtn from './controlButtons/ExportBtn'
import SaveLocalBtn from './controlButtons/SaveToLocalStorageBtn';
import LoadLocalBtn from './controlButtons/LoadFromLocalStorageBtn';

const TopButtons = () => {
  return (
    <section className="topButtons">
      <ImportBtn />
      <LoadLocalBtn />
      <ExportBtn />
      <SaveLocalBtn />
    </section>
  )
}

export default TopButtons
