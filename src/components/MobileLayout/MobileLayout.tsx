import { Container, Box } from '@mui/material';
import React from 'react';
import './style.scss';

type MobileLayoutProps = {
    children: JSX.Element | JSX.Element[];
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
    return (
        <div className="mobile-layout">
            <Box sx={{ position: 'relative', height: '92vh' }}>
                {children}
            </Box>
        </div>
    );
};

export default MobileLayout;