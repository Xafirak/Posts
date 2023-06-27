import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import avatar from '../images/me.jpg';
import menu from '../images/burger.png';
import { useState } from 'react';

const Menu = () => {
    const [hide, setHide] = useState(true);
    function copy(text) {
        navigator.clipboard.writeText(text);
        setHide(false);
    }
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="none">
                <img src={menu} />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: 'lightslategrey' }}>
                <Dropdown
                    style={{ padding: '10px'}}
                >
                    <img
                        style={{ width: '95px', height: '75px' }}
                        src={avatar}
                        alt="моя ава"
                    />
                    <div>Данил</div>
                    <div
                        onClick={(e) => copy(e.target.innerText)}
                        style={{
                            padding: ' 0 3px',
                            cursor: 'pointer',
                            backgroundColor: 'lightgray',
                            color: 'black',
                        }}
                    >
                        bensala3@yandex.ru
                    </div>
                </Dropdown>
                <Dropdown.Item href="/aboutme">About me</Dropdown.Item>
                <Dropdown.Item href="/">Posts list</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Menu;
