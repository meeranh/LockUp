// This function prompts the user to enter a master password for encryption
export default function requestMasterPassword() {
  const masterPassword = prompt('Enter master password');
  if (masterPassword == null) {
    alert('Master password cannot be empty');
    return
  }
  return masterPassword;
}
