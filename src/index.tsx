import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadDevTools } from 'jira-dev-tool';
import { AppProvider } from './context';
loadDevTools(() => {
    ReactDOM.render(
        <React.StrictMode>
            <AppProvider>
                <App />
            </AppProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
});
