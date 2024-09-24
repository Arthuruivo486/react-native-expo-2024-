import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const Role = {
    SUPER: "SUPER",
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        authenticated: null, // Corrigido o campo 'authenticated'
        user: null,
        role: null,
    });

    const signIn = async ({ email, password }) => {
        if (email === "super@gmail.com" && password === "Super123!") {
            setUser({
                authenticated: true,
                user: { id: 1, name: "Super USUARIOr", email },
                role: Role.SUPER,
            });
        } else {
            setUser({
                authenticated: false,
                user: null,
                role: null,
            });
        }
    };

    const signOut = async () => {
        setUser({
            authenticated: false,
            user: null,
            role: null,
        });
    };

    useEffect(() => {
        console.log('AuthProvider: ', user);
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
