import React from 'react';
import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import Card from 'react-bootstrap/esm/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Comments from '../components/Comments';
import userLogo from '../images/user.png';
import { getCommentId } from '../store/reducers/data/CommentsSlice';
import ErrorMessage from './ErrorMessage';

const PostList = ({ post }) => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allComments = useSelector((state) => state.comments.allComments);
    const commentsError = useSelector((state) => state.comments.error);
    const postComments = allComments.filter(
        (comment) => comment.postId === post.id
    );

    function handleComments() {
        if (
            postComments.length > 0 &&
            postComments.map((comment) => comment.postId === post.id)
        ) {
            setClicked(true);
        } else {
            if (!clicked) {
                setClicked(true);
                dispatch(getCommentId(post.id));
            }
        }
    }

    function navigateToUser() {
        navigate(`/users/${post.userId}`);
    }

    return (
        <div className="">
            <Card style={{ marginTop: '1vh' }}>
                <Card.Body>
                    <img
                        onClick={() => navigateToUser()}
                        style={{
                            width: '3em',
                            height: '3em',
                            cursor: 'pointer',
                        }}
                        src={userLogo}
                        alt=""
                    />
                    <Card.Title>
                        <b> Title: {post.title}</b>
                    </Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header onClick={() => handleComments()}>
                            Comments
                        </Accordion.Header>
                        <Comments
                            error={commentsError}
                            comments={postComments}
                        />
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    );
};

export default PostList;
