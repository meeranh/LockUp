import encryptionForExport from '../../functions/EncryptionForExport';
import requestMasterPassword from '../../functions/passwordUtilities/RequestMasterPassword';

export default function saveToLocalStorage(allPasswords) {

  // Requests for a master password
  const masterPassword = requestMasterPassword();

  // Passwords are encrypted using the master password
  const data = encryptionForExport(allPasswords, masterPassword);

  // The encrypted passwords are saved to local storage
  localStorage.setItem('passwords', data);
}
