import React from "react";
import {createRoot} from 'react-dom/client';
import App from './src/App';
import { authenWithRandomUser } from "./src/utils/localStorage";

(async function () {
    await authenWithRandomUser();

    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<App />);
}());