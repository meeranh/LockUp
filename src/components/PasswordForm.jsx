const PasswordForm = () => {
  return (
    <div className="PassForm">
      <h4>Store a new password</h4>
      <form>
        <p>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
        </p>
        <br />
        <p>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" />
        </p>
        <br />
        <input type="submit" className="FormSubmit" />
      </form>
    </div>
  )
}

export default PasswordForm
