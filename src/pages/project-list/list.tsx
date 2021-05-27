import { User } from './search';
interface Project {
    id: number;
    name: string;
    personId: number;
    organization: string;
    created: number;
}

interface ListProps {
    list: Project[];
    users: User[];
}
export const List = ({ list, users }: ListProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>项目名称</td>
                    <td>负责人</td>
                </tr>
            </thead>
            <tbody>
                {list.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{users.find(user => user.id === item.personId)?.name || '未知'}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
