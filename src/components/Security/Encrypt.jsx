import CryptoJs from 'crypto-js';

export default function encryptPass(text, key) {
  // Encrypt the text with the key using cryptojs
  const bytes = CryptoJs.enc.Utf8.parse(text);
  const encrypted = CryptoJs.AES.encrypt(bytes, key).toString();
  return encrypted;
}
