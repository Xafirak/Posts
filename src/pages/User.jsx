import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchUserPosts } from '../store/reducers/data/UserSlice';
import Card from 'react-bootstrap/esm/Card';
import { Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import PostList from '../components/PostList';
import ErrorMessage from '../components/ErrorMessage';

const User = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const userInfo = useSelector((state) => state.user.user);
    const isUserLoading = useSelector((state) => state.user.isUserLoading);
    const isPostsAreLoading = useSelector((state) => state.user.isPostsLoading);
    const userPosts = useSelector((state) => state.user.userPosts);
    const userError = useSelector((state) => state.user.userError);
    const userPostsError = useSelector((state) => state.user.userPostsError);
    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchUser(id));
            dispatch(fetchUserPosts(id));
        }, 500);
    }, []);

    return (
        <div>
            {isUserLoading === false && isPostsAreLoading === false ? (
                userError.length === 0 ? (
                    <div>
                        <Card>
                            <Button
                                style={{ width: '5em' }}
                                onClick={() => nav(-1)}
                            >
                                Back
                            </Button>
                            <h2 style={{ textAlign: 'center' }}>User Info</h2>
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

                                <Card.Body>
                                    <h4 style={{ textAlign: 'center' }}>
                                        All user posts
                                    </h4>
                                    {userPostsError.length === 0 ? (
                                        userPosts.map((post) => (
                                            <PostList
                                                key={post.id}
                                                post={post}
                                            />
                                        ))
                                    ) : (
                                        <ErrorMessage error={userPostsError} />
                                    )}
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </div>
                ) : (
                    <ErrorMessage error={userError} />
                )
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default User;
