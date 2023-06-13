import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchUserPosts } from '../store/reducers/data/UserSlice';
import Card from 'react-bootstrap/esm/Card';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import PostList from '../components/PostList';

const User = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const userInfo = useSelector((state) => state.user.user);
    const isUserLoading = useSelector((state) => state.user.isUserLoading);
    const isPostsAreLoading = useSelector((state) => state.user.isPostsLoading);
    const userPosts = useSelector((state) => state.user.userPosts);
    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchUser(id));
            dispatch(fetchUserPosts(id));
        }, 500);
    }, []);

    console.log(userInfo);
    console.log(userPosts);
    return (
        <div>
            {isUserLoading === false && isPostsAreLoading === false ? (
                <div>
                    <Button onClick={() => nav(-1)}>Back</Button>
                    <h2 style={{ textAlign: 'center' }}>User Info</h2>
                    <Card style={{ margin: '10px', width: '1000px' }}>
                        <Card.Body>
                            <Card.Title>
                                <h1>{userInfo.name}</h1>
                            </Card.Title>
                            <Card.Text>
                                <b>Email</b>: {userInfo.email}
                            </Card.Text>
                            <Card.Text>
                                <b>Lives</b>: {userInfo.address.city}
                            </Card.Text>
                            <Card.Text>
                                <b>Working at</b>: {userInfo.company.name}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <h4>All user posts</h4>

                            {userPosts.map((post) => (
                                <PostList key={post.id} post={post} />
                            ))}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default User;
