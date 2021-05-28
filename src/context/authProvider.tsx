import { useContext, createContext, useState, ReactNode } from 'react';
import * as auth from '../auth_provider';
import { User } from '../pages/project-list/search';
//创建context
const AuthContext =
    createContext<
        | {
              user: User | null;
              login: (param: { username: string; password: string }) => Promise<void>;
              register: (param: { username: string; password: string }) => Promise<void>;
              logout: () => Promise<void>;
          }
        | undefined
    >(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    //存储user
    const [user, setUser] = useState<User | null>(null);
    //登陆
    const login = (param: { username: string; password: string }) => {
        return auth.login(param).then(setUser);
    };
    //注册
    const register = (param: { username: string; password: string }) => {
        return auth.register(param).then(setUser);
    };
    //登出
    const logout = () => {
        return auth.logout().then(() => {
            setUser(null);
        });
    };

    return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('必须在AuthContext中使用');
    }
    return context;
};
