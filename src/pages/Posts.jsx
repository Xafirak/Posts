import React, { useEffect } from 'react';
import { getUsers } from '../api/fetchUsers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, setUsers } from '../store/reducers/posts/PostsSlice';
import PostList from './PostList';

const Posts = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const posts = useSelector((state) => state.posts.posts);
    useEffect(() => {
        setTimeout(() => dispatch(fetchAllUsers()), 500);
    }, []);
    return (
        <div>
            <h2>Posts</h2>
            {posts.map((post) => (
                <PostList key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Posts;
