import { useEffect, useState } from 'react';
import qs from 'qs';
import { Search } from './search';
import { List } from './list';
import { cleanObject, useDebounce, useMount } from '../../hooks';

export const ProjectList = () => {
    const url = process.env.REACT_APP_API_URL;
    //input的受控状态
    const [param, setParam] = useState({
        name: '',
        personId: '',
    });
    const [users, setUsers] = useState([]); //选择人列表
    const [list, setList] = useState([]); //项目列表
    let debounceParam = useDebounce(param, 200);

    //获取table列表
    useEffect(() => {
        fetch(`${url}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async res => {
            if (res.ok) {
                // const list = await res.json();
                // setList(list);
                setList(await res.json());
            }
        });
    }, [debounceParam]);

    //获取负责人列表
    useMount(() => {
        fetch(`${url}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json());
            }
        });
    });

    return (
        <div>
            <Search param={param} setParam={setParam} users={users} />
            <List users={users} list={list} />
        </div>
    );
};
