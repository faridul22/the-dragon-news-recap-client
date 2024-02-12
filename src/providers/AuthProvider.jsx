import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const user = { name: "Farid" }

    const authInfo = {

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;