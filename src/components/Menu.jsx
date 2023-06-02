import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import burger from '../images/burger-icon.svg';
import burg from '../images/burger.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/esm/Card';

const Menu = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Menu">
            <Card>
                <img src="" alt="моя ава" />
                <div>моя почта</div>
            </Card>

            <Dropdown.Item href="/aboutme">About me</Dropdown.Item>
            <Dropdown.Item href="/">Posts list</Dropdown.Item>
        </DropdownButton>
    );
};

export default Menu;
