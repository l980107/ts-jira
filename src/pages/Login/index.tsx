import { FormEvent } from 'react';

export const Login = () => {
    const url = process.env.REACT_APP_API_URL;

    const login = (param: { username: string; password: string }) => {
        fetch(`${url}/login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(param),
        });
    };

    const submitHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //获取数据
        const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
        //登陆
        login({ username, password });
    };

    return (
        <form onSubmit={submitHandle}>
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
