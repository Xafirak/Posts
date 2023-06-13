import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../store/reducers/data/UserSlice';
import Card from 'react-bootstrap/esm/Card';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import PostList from '../components/PostList';

const User = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const userInfo = useSelector((state) => state.user.user);
    const isUserLoading = useSelector((state) => state.user.isLoading);
    const nav = useNavigate();

    useEffect(() => {
        dispatch(fetchUser(id));
    }, [id]);

    console.log(id);
    console.log(userInfo);
    return (
        <div>
            {isUserLoading === false ? (
                <div>
                    <Button onClick={() => nav(-1)}>Back</Button>
                    <h2>User info</h2>
                    <Card style={{ margin: '10px', width: '1000px' }}>
                        <Card.Img
                            variant="top"
                            src="holder.js/100px180?text=Image cap"
                        />
                        <Card.Body>
                            <Card.Title>
                                <h1>{userInfo.name}</h1>
                            </Card.Title>
                            <Card.Text>
                                <b>Email</b>: {userInfo.email}
                            </Card.Text>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <b>Lives</b>: {userInfo.address.city}
                            </Card.Text>
                            <Card.Text>
                                <b>Working at</b>: {userInfo.company.name}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>All user posts</ListGroup.Item>
                            {/* <PostList /> */}
                        </ListGroup>
                    </Card>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default User;
