import React, { useEffect, useState } from 'react';
import {
    Favorite as FavoriteIcon,
    Close as CloseIcon,
} from '@mui/icons-material';
import SwipeableViews from "react-swipeable-views";
import { Skeleton } from '@mui/material';
import Toast from '../../components/Toast/Toast';
import './style.scss';
import { getCurrentUser } from '../../utils/localStorage';

const Discover = props => {
    const currentUser = getCurrentUser();
    const [users, setUsers] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${currentUser.id}`)
            .then(response => response.json())
            .then(result => {
                if (result.data && result.data.length > 0) {
                    const users = result.data.filter((curUser: any) => curUser.id !== currentUser.id);
                    setUsers(users)
                }
            });
    }, []);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const handleAction = (action: string) => {
        fetch(`http://localhost:3000/users/action`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: currentUser.id,
                action,
                stuffId: users[activeStep] ? users[activeStep].id : ''
            })
        })
            .then(response => response.json())
            .then(result => {
                if (result && result.success) {
                    <Toast isOpen={true} content='Like success!' type='info' />
                } else {
                    <Toast isOpen={true} content='Like failed!' type='error' />
                }

                handleNext();
            });
    };

    return (
        <div className="discover">
            <div className="user-section">
                {
                    users && users.length > 0 ?
                        <SwipeableViews
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                        >
                            {
                                users.map((user, index) =>
                                    <React.Fragment key={index}>
                                        <div className="user__image">
                                            <img src={user.picture} />
                                        </div>
                                        <div className="user__info">
                                            <p> {user.title}: {user.firstName} {user.lastName}</p>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        </SwipeableViews>
                        : <Skeleton
                            width='100%'
                            height='100%'
                            variant="rectangular"
                        />

                }
            </div>
            <div className="action-section">
                <div className="action__item action__item--yellow" onClick={() => handleAction('pass')}>
                    <CloseIcon className="yellow" />
                </div>
                <div className="action__item action__item--pink" onClick={() => handleAction('like')}>
                    <FavoriteIcon className="pink" />
                </div>
            </div>
        </div>
    );
};

export default Discover;