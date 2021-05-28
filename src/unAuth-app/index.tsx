import { useState } from 'react';
import { Register } from './register';
import { Login } from './login';

export const UnAuthApp = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
            {isLogin ? <Login /> : <Register />}
            <button
                onClick={() => {
                    setIsLogin(!isLogin);
                }}
            >
                {isLogin ? '还没有账号去注册一个!' : '已经有账号了去登陆吧!'}
            </button>
        </div>
    );
};
