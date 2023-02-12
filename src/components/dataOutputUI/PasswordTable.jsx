import PasswordLister from './PasswordLister';

const PasswordTable = ({ data }) => {
  return (
    <table className="UserData" border="1">
      <thead>
        <tr>
          <th>Email</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="DataBody">
        {data.map((item, index) => {
          return <PasswordLister key={index} id={index} email={item.email} password={item.password} />
        })}
      </tbody>
    </table>
  )
}

export default PasswordTable
