import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext<{
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (token: string, userName?: string) => Promise<void>;
    logout: () => Promise<void>;
}>({
    isAuthenticated: false,
    isLoading: true,
    login: async () => { },
    logout: async () => { },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const token = await AsyncStorage.getItem('authToken');
            setIsAuthenticated(token !== null);
        } catch (error) {
            console.log('Auth check error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (token: string, userName?: string) => {
        await AsyncStorage.setItem('authToken', token);
        if (userName) await AsyncStorage.setItem('userName', userName);
        setIsAuthenticated(true);
    };

    const logout = async () => {
        await AsyncStorage.clear();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
