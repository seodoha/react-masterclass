import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Ex from './ex01';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor: "#111"
}
const lightTheme = {
    textColor: "#111",
    backgroundColor: "whitesmoke"
}
root.render(
    <React.StrictMode>
        <ThemeProvider theme={lightTheme}>
            <Ex />
        </ThemeProvider>
    </React.StrictMode>
);
