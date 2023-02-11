const PasswordLister = ({ email, password }) => {
  return (
    <>
      <tr>
        <td>{email}</td>
        <td>{password}</td>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button>Copy</button>
        <button>Delete</button>
      </div>
      </tr>
    </>
  )
}

export default PasswordLister
