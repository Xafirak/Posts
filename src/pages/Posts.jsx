import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from '../store/reducers/posts/PostsSlice';
import PostList from './PostList';

const Posts = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const posts = useSelector((state) => state.posts.posts);
    // @ts-ignore
    const isLoading = useSelector((state) => state.posts.isLoading);
    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchAllPosts());
        }, 500);
    }, []);
    return (
        <div>
            <h2>Posts</h2>
            {isLoading === false ? (
                posts.map((post) => <PostList key={post.id} post={post} />)
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};

export default Posts;
