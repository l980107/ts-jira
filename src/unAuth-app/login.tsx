import { FormEvent, useState } from 'react';
import { useAuth } from '../context/authProvider';

export const Login = () => {
    const { login, user } = useAuth();

    const submitHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //获取数据
        const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
        //登陆注册
        login({ username, password });
    };

    return (
        <form onSubmit={submitHandle}>
            <div>{user ? `Hi, ${user.name}` : null}</div>
            <div>
                <label htmlFor='username'>用户名</label>
                <input type='text' id='usernmae' />
            </div>
            <div>
                <label htmlFor='password'>密码</label>
                <input type='password' id='password' />
            </div>
            <button type='submit'>登陆</button>
        </form>
    );
};
