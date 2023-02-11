import { createContext, useState } from 'react';

const PassContext = createContext();

export function PassProvider({ children }) {
  const [userPasswords, setUserPasswords] = useState([]);

  const addNewPassword = (newEmail, newPassword) => {
    setUserPasswords([...userPasswords, { email: newEmail, password: newPassword }]);
  }

  return (
    <PassContext.Provider value={{
      allPasswords: userPasswords,
      newPassword: addNewPassword
    }}>
      {children}
    </PassContext.Provider>
  )
}

export default PassContext;
