import React from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';

const Loader = () => {
    return (
        <div
            style={{
                alignContent: 'center',
                textAlign: 'center',
                left: '50%',
                top: '50%',
            }}
        >
            <Spinner animation="border" role="status"></Spinner>
        </div>
    );
};

export default Loader;
