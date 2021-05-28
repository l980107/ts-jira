import { ReactNode } from 'react';
import { AuthProvider } from './authProvider';
export const AppProvider = ({ children }: { children: ReactNode }) => {
    return <AuthProvider>{children}</AuthProvider>;
};
