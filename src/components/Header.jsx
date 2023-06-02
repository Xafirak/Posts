import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Menu from '../components/Menu';

const Header = () => {
    return (
        <Card>
            <Card.Header>
                <Menu />
            </Card.Header>
        </Card>
    );
};

export default Header;
