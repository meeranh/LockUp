import CryptoJs from 'crypto-js';
import encryptionAlgorithm from './cryptography/EncryptionAlgorithm';

export default function encryptionForExport(data, masterPassword) {
  let encryptedPasswords = data.map(credential => {
    return {
      email: encryptionAlgorithm(credential.email, masterPassword),
      password: encryptionAlgorithm(credential.password, masterPassword),
    }
  })
  encryptedPasswords = {
    md5: CryptoJs.MD5(masterPassword).toString(),
    passwords: encryptedPasswords
  }

  return JSON.stringify(encryptedPasswords);
}
