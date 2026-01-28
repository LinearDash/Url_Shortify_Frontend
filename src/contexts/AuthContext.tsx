import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type User = {
    userId: string;
    email: string;
    name: string;
    profilePicture: string;
}

type AuthContextType = {
    user: User | null;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
const [user, setUser] =  useState<User | null>(null);
const [token, setToken] = useState<string | null>(null);

useEffect(()=>{
    const storedToken = localStorage.getItem('authToken');

    if(storedToken){
        try {
            const decoded = jwtDecode<User>(storedToken);
            setUser(decoded);
            setToken(storedToken);
        } catch (error) {
            console.error('Invalid token, removing from storage:', error);
            localStorage.removeItem('authToken');
            setUser(null);
            setToken(null);
        }
    }
},[]);

 const login = (newToken: string) => {
    try {
        const decoded = jwtDecode<User>(newToken);
        setUser(decoded);
        setToken(newToken);
        localStorage.setItem('authToken', newToken);
    } catch (error) {
        console.error('Invalid token during login', error);
    }
 }

 const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
 }

 return(
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: () => !!user }}>
        {children}
    </AuthContext.Provider>
 )
}
export const useAuth = () => {
    const context =  useContext(AuthContext);

    if(!context){
        throw new Error('useAuth must be used within an AuthContextProvider');
    }

    return context;
    
}

