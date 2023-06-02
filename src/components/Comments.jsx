import React from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import Card from 'react-bootstrap/esm/Card';

const Comments = ({comment}) => {
    return (
        <Accordion.Body>
            <Card.Title>{comment.email}</Card.Title>
            {comment.body}
        </Accordion.Body>
    );
};

export default Comments;
