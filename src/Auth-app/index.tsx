import { useAuth } from '../context/authProvider';
import { ProjectList } from '../pages/project-list/';

export const AuthApp = () => {
    const { logout } = useAuth();
    return (
        <div>
            <button onClick={logout}>登出</button>
            <ProjectList />
        </div>
    );
};
