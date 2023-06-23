import React from 'react';

const ErrorMessage = ({ error }) => {
    return (
        <div>
            <h2 style={{ textAlign: 'center', color: 'red' }}>
                Ошибка! {error.message}
            </h2>
        </div>
    );
};

export default ErrorMessage;
