import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../../utils/localStorage';
import './style.scss';

const MatchesHistory = (props) => {
    const currentUser = getCurrentUser();
    const [matchedUsers, setMatchedUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${currentUser.id}/match`)
            .then(response => response.json())
            .then(result => {
                setMatchedUsers(result.data)
            });
    }, []);

    return (
        <div className='matches-history'>
            <div className='matches-user'>
                {
                    matchedUsers.length > 0 ?
                        <ul className='matches-user__list'>
                            {
                                matchedUsers.map((user: any, index: number) => {
                                    return (
                                        <li className='matches-user__item' key={index + 1}>
                                            <div className='avatar'>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={user.picture}
                                                    sx={{ width: 56, height: 56 }}
                                                />
                                            </div>
                                            <div className='info'>
                                                <p> {user.firstName + '' + user.lastName} </p>
                                                <p> Title: {user.title} </p>
                                            </div>
                                        </li>
                                    )
                                })

                            }
                        </ul>
                        : <h4> There are no users who matched with you </h4>
                }
            </div>
        </div>
    );
};

export default MatchesHistory;