import CryptoJs from 'crypto-js';
import encryptionAlgorithm from './cryptography/EncryptionAlgorithm';

// This is the function that will be used to export passwords from the webapp
export default function encryptionForExport(data, masterPassword) {

  // All passwords will be encrypted using the master password and stored as JSON
  let encryptedPasswords = data.map(credential => {
    return {
      email: encryptionAlgorithm(credential.email, masterPassword),
      password: encryptionAlgorithm(credential.password, masterPassword),
    }
  })

  // An MD5 of the master password will be appended to the JSON to verify authenticity
  encryptedPasswords = {
    md5: CryptoJs.MD5(masterPassword).toString(),
    passwords: encryptedPasswords
  }

  // A stringified version of the encrypted JSON will be ready for exporting
  return JSON.stringify(encryptedPasswords);
}
