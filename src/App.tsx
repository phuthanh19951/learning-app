import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoute from './components/AppRoute/AppRoute';
import MobileLayout from './components/MobileLayout/MobileLayout';
import Footer from './components/Footer/Footer';
import createRoutes from './routes';
import './App.scss';

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