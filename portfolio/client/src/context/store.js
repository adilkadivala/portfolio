import { createContext, useContext, useEffect, useState } from "react";

export const localStore = createContext();

const Store = ({ children }) => {
  // adding token and otp in local storage;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [otp, setOtp] = useState(localStorage.getItem("otp"));
  const jwtToken = `PortFolio${token}`;

  const storeToken = (serverToken, serverOtp) => {
    setToken(serverToken);
    setOtp(serverOtp);
    localStorage.setItem("token", serverToken);
    localStorage.setItem("otp", serverOtp);
  };

  return (
    <localStore.Provider
      value={{
        storeToken,
        jwtToken,
        otp,
      }}
    >
      {children}
    </localStore.Provider>
  );
};

export default Store;

export const useAuth = () => {
  const authContextValue = useContext(localStore);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
