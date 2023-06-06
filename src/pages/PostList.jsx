import React from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import Card from 'react-bootstrap/esm/Card';
import { useDispatch, useSelector } from 'react-redux';
import Comments from '../components/Comments';
import userLogo from '../images/user.png';
import { getCommentId } from '../store/reducers/posts/CommentsSlice';

//TODO  make styles
const PostList = ({ post }) => {
    const dispatch = useDispatch();
    const allComments = useSelector((state) => state.comments.allComments);
    let postComments = allComments.filter(comment=> comment.postId === post.id);
    window.post = allComments;
    window.comm = postComments;
    window.p = post
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
                        <Accordion.Header
                            onClick={() => dispatch(getCommentId(post.id))}
                        >
                            Comments
                        </Accordion.Header>
                        <Accordion.Body>
                            <Comments id={post.id} comments={postComments} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    );
};

export default PostList;
