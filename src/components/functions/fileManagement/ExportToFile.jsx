import requestMasterPassword from '../passwordUtilities/RequestMasterPassword';
import encryptionForExport from '../EncryptionForExport';
import saveAsJson from './SaveAsJson';

export default function exportToFile(arrayOfPasswords) {
  const masterPassword = requestMasterPassword();
  const data = encryptionForExport(arrayOfPasswords, masterPassword)
  saveAsJson(data);
}
