import PasswordLister from './PasswordLister';

const PasswordTable = ({ data }) => {
  return (
    <div className="UserData">
      <table className="DataBody" border="1">
        <tr>
          <th>Email</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
        {data.map((item, index) => {
          return <PasswordLister key={index} id={index} email={item.email} password={item.password} />
        })}
      </table>
    </div>
  )
}

export default PasswordTable
