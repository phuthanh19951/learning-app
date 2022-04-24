import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Snackbar } from '@mui/material';

type ToastProps = {
    isOpen: boolean;
    type: string;
    content: string;
    duration?: number;
};

const Toast = ({ isOpen, type = 'info', content, duration = 3000 }: ToastProps) => {
    return (
        <div>
            <Snackbar open={isOpen} autoHideDuration={duration}>
                <Alert severity={type} sx={{ width: '100%' }}>
                    {content}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Toast;