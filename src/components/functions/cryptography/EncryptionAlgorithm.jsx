import CryptoJs from 'crypto-js';

export default function encryptionAlgorithm(text, key) {
  const bytes = CryptoJs.enc.Utf8.parse(text);
  const encrypted = CryptoJs.AES.encrypt(bytes, key).toString();
  return encrypted;
}
