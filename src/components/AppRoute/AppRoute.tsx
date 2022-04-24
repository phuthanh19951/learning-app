import React from 'react';
import { Routes, Route } from 'react-router-dom';

interface AppRoutes {
  path: string;
  element: any;
}

function AppRoute(props: { routes: AppRoutes[] }) {
    const { routes } = props;

    return (
      <Routes>
        { routes.map((route: AppRoutes, index) => {
            return  (<Route key={index+1} path={route.path} element={route.element} />);
          }) 
        }
      </Routes>
    );
}

export default AppRoute;