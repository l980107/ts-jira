export interface User {
    id: number;
    name: string;
    token: string;
}

export interface SearchProps {
    param: {
        name: string;
        personId: string;
    };
    setParam: (param: SearchProps['param']) => void;
    users: User[];
}

export const Search = ({ param, setParam, users }: SearchProps) => {
    return (
        <form action=''>
            <input
                type='text'
                value={param.name}
                onChange={e => setParam({ ...param, name: e.target.value })}
            />
            <select
                value={param.personId}
                onChange={e => setParam({ ...param, personId: e.target.value })}
            >
                <option value=''>负责人</option>
                {users.map(user => {
                    return (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    );
                })}
            </select>
        </form>
    );
};
