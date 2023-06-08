import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Search from '../components/Search';
import Sorting from '../components/Sorting';
import { fetchAllPosts } from '../store/reducers/posts/PostsSlice';
import PostList from './PostList';

// Вопрос - надо ли  всю логику  писать в компонентах ()
// (пример - Sorting или Search )  или нужно держать компоненты чистыми?

const Posts = () => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [sortButtonName, setSortButtonName] = useState('');
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
        setSortButtonName('');
    }, [allPosts]);

    useEffect(() => {
        setPosts(searchedPosts);
        setSortButtonName('');
    }, [searchedPosts]);

    function sortingPosts(rule) {
        let sortedPosts = [...posts];
        if (rule === 'From A to Z') {
            sortedPosts.sort((a, b) => {
                // @ts-ignore
                return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
            });
            setPosts(sortedPosts);
        } else {
            sortedPosts.sort((a, b) => {
                // @ts-ignore
                return a.title < b.title ? 1 : a.title > b.title ? -1 : 0;
            });
            setPosts(sortedPosts);
        }
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Posts</h2>
            <Search setPosts={setSearchedPosts} />
            <Sorting
                buttonName={sortButtonName}
                setButtonName={setSortButtonName}
                sortingPosts={sortingPosts}
            />
            {isLoading === false ? (
                posts.map((post) => <PostList key={post.id} post={post} />)
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Posts;
