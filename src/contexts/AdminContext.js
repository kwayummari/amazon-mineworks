import React, { createContext, useContext, useState, useEffect } from 'react';
import databaseService from '../services/realMySQLService';

const AdminContext = createContext();

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};

export const AdminProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminUser, setAdminUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dbStatus, setDbStatus] = useState(null);

    // Check for existing session on mount
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('adminToken');
            const user = localStorage.getItem('adminUser');

            if (token && user) {
                try {
                    // Verify token is still valid with the database
                    const tokenResult = await databaseService.verifyAdminToken(token);
                    if (tokenResult.success) {
                        setIsAuthenticated(true);
                        setAdminUser(tokenResult.user);

                        // Get database status
                        const healthCheck = await databaseService.healthCheck();
                        setDbStatus(healthCheck);
                    } else {
                        // Token is invalid, clear it
                        localStorage.removeItem('adminToken');
                        localStorage.removeItem('adminUser');
                    }
                } catch (error) {
                    console.error('Token verification failed:', error);
                    // Clear invalid session
                    localStorage.removeItem('adminToken');
                    localStorage.removeItem('adminUser');
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (credentials) => {
        setLoading(true);

        try {
            const result = await databaseService.authenticateAdmin(credentials);

            if (result.success) {
                // Use the real token from the database response
                localStorage.setItem('adminToken', result.token);
                localStorage.setItem('adminUser', JSON.stringify(result.user));

                setIsAuthenticated(true);
                setAdminUser(result.user);

                // Get database status
                const healthCheck = await databaseService.healthCheck();
                setDbStatus(healthCheck);

                setLoading(false);
                return { success: true };
            } else {
                setLoading(false);
                return { success: false, error: result.error };
            }
        } catch (error) {
            setLoading(false);
            return { success: false, error: 'Database connection failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        setIsAuthenticated(false);
        setAdminUser(null);
        setDbStatus(null);
    };

    const value = {
        isAuthenticated,
        adminUser,
        loading,
        dbStatus,
        login,
        logout
    };

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};
