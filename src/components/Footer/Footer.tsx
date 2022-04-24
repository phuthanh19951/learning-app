import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import './style.scss';

import {
    Favorite as FavoriteIcon,
    ThumbUp as ThumbUpIcon,
    Search as SearchIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [value, setValue] = useState(0);

    return (
        <div className='footer'>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    component={Link}
                    to='/likes'
                    label="Likes"
                    icon={<ThumbUpIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to='/'
                    label="Discover"
                    icon={<SearchIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to='/matches'
                    label="Matches"
                    icon={<FavoriteIcon />}
                />
            </BottomNavigation>
        </div>
    );
};

export default Footer;