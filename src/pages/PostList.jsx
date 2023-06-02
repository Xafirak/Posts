import React from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import Card from 'react-bootstrap/esm/Card';
import Comments from '../components/Comments';
import userLogo from '../images/user.png';

//TODO  make styles
const PostList = ({ post, comments }) => {
    console.log(comments);
    return (
        <div className="">
            <Card>
                <Card.Body>
                    <img
                        style={{ width: '50px', height: '50px' }}
                        src={userLogo}
                        alt=""
                    />
                    <Card.Title>
                        <b>Title: {post.title}</b>
                    </Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Comments</Accordion.Header>
                        {comments.map((comment) => (
                            <Comments comment={comment} />
                        ))}
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    );
};

export default PostList;
