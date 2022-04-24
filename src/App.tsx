import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import createRoutes from './routes';
import AppRoute from './components/AppRoute/AppRoute';
import MobileLayout from './components/MobileLayout/MobileLayout';
import './App.scss';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <MobileLayout>
                    <AppRoute routes={createRoutes()} />
                    <Footer />
                </MobileLayout>
            </BrowserRouter>
        </div>
    );
}

export default App;