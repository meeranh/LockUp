import DataBody from './PasswordPrinter';

const StoredPasswords = () => {
  return (
    <div className="StoredPass">
      <h4>All recorded passwords</h4>
      <br/>
      <DataBody data={{email: "samplemail@gmail.com", password: "asfd123"}} />
    </div>
  )
}

export default StoredPasswords
