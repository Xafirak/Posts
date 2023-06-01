import React, { useEffect } from 'react';
import { getUsers } from './../api/fetchUsers';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../store/reducers/posts/PostsSlice';
import { fetchAllUsers } from './../store/reducers/posts/PostsSlice';
import PostList from './PostList';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    useEffect(() => {
        console.log('sup');
        setUsers(getUsers())
        // dispatch(fetchAllUsers())
        // setTimeout(() => dispatch(fetchAllUsers()), 500);
    }, []);
    console.log(posts);
    return (
        <div>
            <button onClick={()=>setUsers()}></button>
            <h2>Posts</h2>
            {posts.map((post) => (
                <PostList key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Posts;
