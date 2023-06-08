import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Sorting = ({ buttonName, setButtonName, sortingPosts }) => {
    function sortButtonHandler(e) {
        setButtonName(e.target.text);
        sortingPosts(e.target.text);
    }
    return (
        <DropdownButton
            variant="outline-secondary"
            title={buttonName ? `${buttonName}` : 'Sort'}
            id="input-group-dropdown-1"
        >
            <Dropdown.Item onClick={(e) => sortButtonHandler(e)}>
                From A to Z
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => sortButtonHandler(e)}>
                From Z to A
            </Dropdown.Item>
        </DropdownButton>
    );
};

export default Sorting;
