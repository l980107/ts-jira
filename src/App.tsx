import React from 'react';
import { AuthApp } from './Auth-app';
import { useAuth } from './context/authProvider';
import { UnAuthApp } from './unAuth-app';
// import { ProjectList } from './pages/project-list';

// import { Login } from './pages/login';
// import { Demo } from './TsDemo';

function App() {
    const { user } = useAuth();
    return <div className='App'>{user ? <AuthApp /> : <UnAuthApp />}</div>;
}

export default App;
