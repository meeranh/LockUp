import CryptoJs from 'crypto-js';
import requestMasterPassword from './passwordUtilities/RequestMasterPassword';
import decryptionAlgorithm from './cryptography/DecryptionAlgorithm';

export default function decryptionForImport(dataToBeImported, passwordSetter) {
  const masterPassword = requestMasterPassword();
  const md5 = CryptoJs.MD5(masterPassword).toString();
  const encryptedPasswords = JSON.parse(dataToBeImported);
  if (encryptedPasswords.md5 === md5) {
    encryptedPasswords.passwords.forEach(credential => {
      passwordSetter(prev => [...prev, {
        email: decryptionAlgorithm(credential.email, masterPassword),
        password: decryptionAlgorithm(credential.password, masterPassword)
      }])
    })
  } else {
    alert('Wrong master password');
  }
}
