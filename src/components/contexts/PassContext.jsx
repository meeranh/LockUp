import { createContext, useState } from 'react';

const PassContext = createContext();

export function PassProvider({ children }) {
  const [userPasswords, setUserPasswords] = useState([]);

  const addNewPassword = (newEmail, newPassword) => {
    setUserPasswords([...userPasswords, { email: newEmail, password: newPassword }]);
  }

  const deletePassword = (id) => {
    setUserPasswords(userPasswords.filter((_, index) => index !== id));
  }

  return (
    <PassContext.Provider value={{
      allPasswords: userPasswords,
      newPassword: addNewPassword,
      deletePassword: deletePassword
    }}>
      {children}
    </PassContext.Provider>
  )
}

export default PassContext;
