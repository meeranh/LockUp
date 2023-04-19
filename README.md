# **LockUp: A Secure Web-Based Password Manager (Work in progress)**
A web-based password manager that does not depend on an external server
<img width="960" alt="LockUp" src="https://user-images.githubusercontent.com/102342274/219704812-3bd042ce-b242-435c-8010-b292acb47fd3.png">

## File structure

```
src                                 -> Source code
└── components                      -> React components
     ├── contexts                   -> React contexts
     ├── controlButtons             -> Buttons such as Load, Export, Import, etc
     ├── dataInputUI                -> UI where the credentials are recieved (forms, etc..)
     ├── dataOutputUI               -> UI where the credentials are output (password table, etc..)
     └── functions                  -> Core functions of this password manager
          ├── cryptography          -> Encryption / decryption related functions
          ├── fileManagement        -> File importing / exporting related functions
          └── passwordUtilities     -> Functions for generating / validating passwords
```

## How it works

### **Submitting emails and passwords:**

* The user visits the webpage and starts storing email-password pairs.
* Each pair is stored in a KEY:VALUE format, where the email is the key and the password is the value.

### **Exporting and Encrypting Passwords:**

* To save the passwords for later use, the user must export them to an encrypted .json file.
* The user clicks on "Export" and is prompted to provide a master password for encryption.
* The list of stored passwords is stringified, encrypted using AES encryption with the provided master password, and saved as a .json file.
* The .json file includes the following:
  * SHA3: The checksum of the master password.
  * PASSWORDS: The encrypted key-value pair of the stored passwords and emails.

### **Importing and Decrypting Passwords:**

* To import a set of passwords, the user clicks on "Import" and uploads a .json file along with the master password.
* The SHA3 in the .json file is compared with the SHA3 hash of the provided master password.
* If both match, the master password is used to decrypt the PASSWORDS in the .json file.

### **Saving credentials to local storage:**

* Encrypted passwords and emails will be stored to local storage and can be loaded back easily
* This works by writing the stringified JSON of the encrypted passwords and emails to local storage

## The Flowchart For LockUp
![LockUp Flowchart](https://user-images.githubusercontent.com/102342274/233109089-6e68e579-eb5d-4432-9d31-73534a894d56.png)

