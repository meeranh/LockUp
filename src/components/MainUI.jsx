import PasswordForm from './PasswordForm';
import StoredPasswords from './StoredPasswords';
import { PassProvider } from './contexts/PassContext';

const MainUI = () => {
  return (
    <div className="MainUI">
      <PassProvider>
        <PasswordForm />
        <StoredPasswords />
      </PassProvider>
    </div>
  )
}

export default MainUI
