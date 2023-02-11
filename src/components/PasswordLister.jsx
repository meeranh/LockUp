const PasswordLister = ({email, password}) => {
  return (
    <tr>
      <td>{email}</td>
      <td>{password}</td>
    </tr>
  )
}

export default PasswordLister
