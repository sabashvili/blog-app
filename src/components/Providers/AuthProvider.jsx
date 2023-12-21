import { createContext, useState } from "react";

const AuthProvider = (props) => {
  const [authorized, setAuthorized] = useState(false);

  return <AuthContext.Provider value={{ authorized, setAuthorized }}>{props.children}</AuthContext.Provider>;
};

export const AuthContext = createContext();
export default AuthProvider;
