import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import Card from 'react-bootstrap/esm/Card';
import Loader from './Loader';

const Comments = ({ comments }) => {
    return (
        <Accordion.Body>
            {comments.length > 1 ? (
                comments.map((comment) => (
                    <div key={comment.id}>
                        <Card.Title>{comment.email}</Card.Title>
                        {comment.body}
                    </div>
                ))
            ) : (
                <Loader />
            )}
        </Accordion.Body>
    );
};

export default Comments;
