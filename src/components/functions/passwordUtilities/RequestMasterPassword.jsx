export default function requestMasterPassword() {
  const masterPassword = prompt('Enter master password');
  if (masterPassword == null) {
    return null;
  }
  return masterPassword;
}
