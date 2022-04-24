import React, { useEffect, useState } from 'react';
import {
    Favorite as FavoriteIcon,
    Close as CloseIcon,
} from '@mui/icons-material';
import SwipeableViews from "react-swipeable-views";
import { Skeleton } from '@mui/material';
import './style.scss';

const Discover = props => {
    const [users, setUsers] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        fetch(`https://dummyapi.io/data/v1/user?limit=10`, {
            headers: {
                "app-id": "6263e7a412d916608619e0e5"
            }
        })
            .then(response => response.json())
            .then(json => {
                setUsers(json.data)
            });
    }, []);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <div className="home">          
            <div className="user-section">
                {
                    users.length > 0 ?
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
                    :  <Skeleton
                        width='100%'
                        height='100%'
                        variant="rectangular"
                    />
                    
                }
            </div>
            <div className="action-section">
                <div className="action__item action__item--yellow" onClick={handleNext}>
                    <CloseIcon className="yellow"  />
                </div>
                <div className="action__item action__item--pink" onClick={handleNext}>
                    <FavoriteIcon className="pink"  />
                </div>
            </div>
        </div>
    );
};

export default Discover;