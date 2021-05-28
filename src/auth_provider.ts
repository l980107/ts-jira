import { User } from './pages/project-list/search';
const url = process.env.REACT_APP_API_URL;
const localStorageKey = '__auth_provider_token__';

/**
 * 获取token
 * @returns 返回用户token
 */
export const getToken = () => window.localStorage.getItem(localStorageKey);

/**
 * 发送请求的时候回调，设置Token
 */
export const handleUserReq = ({ user }: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token);
    return user;
};

/**
 * 登陆
 */
export const login = (param: { username: string; password: string }) => {
    return fetch(`${url}/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(param),
    }).then(async res => {
        if (res.ok) {
            return handleUserReq(await res.json());
        } else {
            return Promise.reject(param);
        }
    });
};

/**
 * 注册
 */
export const register = (param: { username: string; password: string }) => {
    return fetch(`${url}/register`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(param),
    }).then(async res => {
        if (res.ok) {
            return handleUserReq(await res.json());
        } else {
            return Promise.reject(param);
        }
    });
};

/**
 * 登出
 */
export const logout = async () => {
    window.localStorage.removeItem(localStorageKey);
};
