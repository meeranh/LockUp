import CryptoJs from 'crypto-js';
import requestMasterPassword from './passwordUtilities/RequestMasterPassword';
import decryptionAlgorithm from './cryptography/DecryptionAlgorithm';

// This is the function that will be used when passwords are imported to the webapp
export default function decryptionForImport(dataToBeImported, passwordSetter) {

  // A master password is requested
  const masterPassword = requestMasterPassword();

  // The master password will be hashed with MD5
  const md5 = CryptoJs.MD5(masterPassword).toString();

  // The JSON file will be parsed
  const encryptedPasswords = JSON.parse(dataToBeImported);

  // If the value of 'MD5' matches the MD5 hash of the master password
  if (encryptedPasswords.md5 === md5) {

    // Each and every key-value pair in the 'passwords' key will be decrypted & saved
    encryptedPasswords.passwords.forEach(credential => {
      passwordSetter(prev => [...prev, {
        email: decryptionAlgorithm(credential.email, masterPassword),
        password: decryptionAlgorithm(credential.password, masterPassword)
      }])
    })
  } else {
    // Else, nothing will happen except an alert
    alert('Wrong master password');
  }
}
