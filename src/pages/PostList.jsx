import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import Card from 'react-bootstrap/esm/Card';
import { useDispatch, useSelector } from 'react-redux';
import Comments from '../components/Comments';
import userLogo from '../images/user.png';
import { getCommentId } from '../store/reducers/posts/CommentsSlice';

//TODO  make styles
const PostList = ({ post }) => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    // @ts-ignore
    const allComments = useSelector((state) => state.comments.allComments);
    let postComments = allComments.filter(
        (comment) => comment.postId === post.id
    );
    function handleComments() {
        if (!clicked) {
            setClicked(true);
            dispatch(getCommentId(post.id));
        }
    }
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
                        <b> Title: {post.title}</b>
                    </Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header onClick={() => handleComments()}>
                            Comments
                        </Accordion.Header>
                        <Comments comments={postComments} />
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    );
};

export default PostList;
