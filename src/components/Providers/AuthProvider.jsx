import { createContext, useEffect, useState } from "react";

const AuthProvider = (props) => {
  const authorizedInitialValue = localStorage.getItem("authorized") === "true";
  const [authorized, setAuthorized] = useState(authorizedInitialValue);

  useEffect(() => {
    localStorage.setItem("authorized", authorized);
  }, [authorized]);

  return <AuthContext.Provider value={{ authorized, setAuthorized }}>{props.children}</AuthContext.Provider>;
};

export const AuthContext = createContext();
export default AuthProvider;
