const PasswordPrinter = ({ data }) => {
  return (
    <div className="UserData">
      <table className="DataBody" border="1">
        <tr>
          <th>Email</th>
          <th>Password</th>
        </tr>
        <tr>
          <td>{data.email}</td>
          <td>{data.password}</td>
        </tr>
      </table>
    </div>
  )
}

export default PasswordPrinter
