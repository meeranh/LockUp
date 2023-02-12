import PasswordLister from './PasswordLister';

// An array of emails and passwords will be taken as props and passed onto PasswordLister for iteration
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
