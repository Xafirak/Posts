import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Search from '../components/Search';
import { fetchAllPosts } from '../store/reducers/posts/PostsSlice';
import PostList from './PostList';

const Posts = () => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [searchedPosts, setSearchedPosts] = useState([]);
    // @ts-ignore
    const allPosts = useSelector((state) => state.posts.posts);

    // @ts-ignore
    const isLoading = useSelector((state) => state.posts.isLoading);

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchAllPosts());
        }, 500);
    }, []);

    useEffect(() => {
        setPosts(allPosts);
    }, [allPosts]);

    useEffect(() => {
        setPosts(searchedPosts)
    }, [searchedPosts]);
    
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Posts</h2>
            <Search setPosts={setSearchedPosts} />
            {isLoading === false ? (
                searchedPosts.length > 0 ? (
                    searchedPosts.map((post) => (
                        <PostList key={post.id} post={post} />
                    ))
                ) : (
                    posts.map((post) => <PostList key={post.id} post={post} />)
                )
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Posts;
