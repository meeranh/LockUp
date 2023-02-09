# **LockUp: A Secure Web-Based Password Manager (Work in progress)**
A web-based password manager that does not depend on an external server

## How it works

### **Submitting emails and passwords:**

* The user visits the webpage and starts storing email-password pairs.
* Each pair is stored in a KEY:VALUE format, where the email is the key and the password is the value.

### **Exporting and Encrypting Passwords:**

* To save the passwords for later use, the user must export them to an encrypted .lockup file.
* The user clicks on "Export" and is prompted to provide a master password for encryption.
* The list of stored passwords is stringified, encrypted using SHA-512 encryption with the provided master password, and saved as a JSON format in the .lockup file.
* The .lockup file includes the following:
  * MD5: The checksum of the master password.
  * HASH: The encrypted string of the stored passwords.

### **Importing and Decrypting Passwords:**

* To import a set of passwords, the user clicks on "Import" and uploads a .lockup file along with the master password.
* The MD5 of the .lockup file is compared to the checksum of the provided master password.
* If both match, the password is used to decrypt the HASH in the .lockup file.
* The decrypted passwords are parsed as JSON and the user's email-password pairs are displayed.
