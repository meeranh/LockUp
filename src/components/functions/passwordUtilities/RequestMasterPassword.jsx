// This function prompts the user to enter a master password for encryption
export default function requestMasterPassword() {
  const masterPassword = prompt('Enter master password');
  if (masterPassword == null) {
    return null;
  }
  return masterPassword;
}
