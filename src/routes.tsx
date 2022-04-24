import React from 'react';
import Discover from './pages/Discover';
import MatchesHistoryPage from './pages/MatchesHistory';
import LikedHistoryPage from './pages/LikedHistory';

const createRoutes = () => {
    return [
        {
            path: '/',
            element: <Discover />
        },
        {
            path: '/matches',
            element: <MatchesHistoryPage />,
        },
        {
            path: '/likes',
            element: <LikedHistoryPage />,
        },
    ];
  };
  
  export default createRoutes;