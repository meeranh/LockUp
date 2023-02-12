import PasswordForm from './dataInputUI/PasswordForm';
import StoredPasswords from './dataOutputUI/StoredPasswords';

const MainUI = () => {
  return (
    <div className="MainUI">
      <PasswordForm />
      <StoredPasswords />
    </div>
  )
}

export default MainUI
