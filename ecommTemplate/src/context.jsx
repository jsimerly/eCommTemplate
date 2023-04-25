import { createContext, useState } from 'react';

export const ShoppingContext = createContext();

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const login = () => {
      // Perform login logic here and set isLoggedIn to true
      setIsLoggedIn(true);
    };
  
    const logout = () => {
      // Perform logout logic here and set isLoggedIn to false
      setIsLoggedIn(false);
    };
  
    return (
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

export const SelectionContext = createContext()


