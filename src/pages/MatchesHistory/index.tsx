import { Avatar } from '@mui/material';
import React, { useEffect } from 'react';
import './style.scss';

const MatchesHistory = (props) => {
    useEffect(() => {
        // fetch("https://dummyapi.io/data/v1/user?limit=1", {
        // headers: {
        //     "app-id": "6263e7a412d916608619e0e5"
        // }
        // }).then(response => response.json())
        // .then(json => console.log(json));
    }, []);

    return (
        <div className='matches-history'>
            <div className='matches-user'>
                <ul className='matches-user__list'>
                    <li className='matches-user__item'>
                        <div className='avatar'>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 56, height: 56 }}
                            />
                        </div>
                        <div className='info'>
                            <p> Huynh Phu Thanh </p>
                            <p> 24 </p>
                        </div>
                    </li>
                    <li className='matches-user__item'>
                        <div className='avatar'>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 56, height: 56 }}
                            />
                        </div>
                        <div className='info'>
                            <p> Huynh Phu Thanh </p>
                            <p> 24 </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MatchesHistory;