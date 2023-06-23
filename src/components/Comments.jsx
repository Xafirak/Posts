import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import Card from 'react-bootstrap/esm/Card';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';

const Comments = ({ comments, error }) => {
    return (
        <Accordion.Body>
            {error ? (
                <ErrorMessage error={error} />
            ) : comments.length > 1 ? (
                comments.map((comment, index) => (
                    <Card style={{ padding: '1em' }} key={index}>
                        <Card.Title>{comment.email}</Card.Title>
                        {comment.body}
                    </Card>
                ))
            ) : (
                <Loader />
            )}
        </Accordion.Body>
    );
};

export default Comments;
