import React from 'react';
import './style.scss';

type MobileLayoutProps = {
    children: JSX.Element | JSX.Element[];
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
    return (
        <div className="mobile-layout">
            <div className="container">
                {children}
            </div>
        </div>
    );
};

export default MobileLayout;