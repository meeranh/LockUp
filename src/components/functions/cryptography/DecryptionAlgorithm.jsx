import CryptoJs from 'crypto-js';

export default function decryptionAlgorithm(cipher, masterPass) {
  const bytes = CryptoJs.AES.decrypt(cipher, masterPass);
  const originalText = bytes.toString(CryptoJs.enc.Utf8);
  return originalText;
}
