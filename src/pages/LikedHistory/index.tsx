import React, { useEffect, useState } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { getCurrentUser } from '../../utils/localStorage';
import './style.scss';

const LikedHistory = () => {
    const currentUser = getCurrentUser();
    const [likedUsers, setLikedUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${currentUser.id}/like`)
            .then(response => response.json())
            .then(result => {
                setLikedUsers(result.data)
            });
    }, []);

    return (
        <div className="likes-history">

            {likedUsers.length > 0 ?
                <ImageList>
                    {
                        likedUsers.map((user: any) => (
                            <ImageListItem key={user.id}>
                                <img
                                    src={`${user.picture}`}
                                    srcSet={`${user.picture}`}
                                    alt={user.firstName + user.lastName}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={user.firstName + '' + user.lastName}
                                    subtitle={user.title}
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
                : <h4> There are no users who you liked </h4>
            }
        </div>
    );
};

export default LikedHistory;