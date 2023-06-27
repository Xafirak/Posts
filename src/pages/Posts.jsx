import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Search from '../components/Search';
import Sorting from '../components/Sorting';
import { fetchAllPosts } from '../store/reducers/data/PostsSlice';
import PostList from '../components/PostList';
import Paginatior from './../components/Pagination';
import Card from 'react-bootstrap/Card';
import ErrorMessage from './../components/ErrorMessage';

const Posts = () => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [sortButtonName, setSortButtonName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const allPosts = useSelector((state) => state.posts.posts);
    const isLoading = useSelector((state) => state.posts.isLoading);
    const postsError = useSelector((state) => state.posts.error);
    const totalNumberOfPosts =
        searchedPosts.length > 0 ? searchedPosts.length : allPosts.length;
    const pageSize = 10;
    const nearNumbersCount = 1;

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchAllPosts());
        }, 500);
    }, []);

    useEffect(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;

        if (searchedPosts.length > 0) {
            let slicedPosts = searchedPosts.slice(
                firstPageIndex,
                lastPageIndex
            );
            setPosts(slicedPosts);
            sortingPosts(slicedPosts);
        } else {
            let slicedPosts = allPosts.slice(firstPageIndex, lastPageIndex);
            setPosts(slicedPosts);
            sortingPosts(slicedPosts);
        }
    }, [allPosts, currentPage, searchedPosts]);

    useEffect(() => {
        sortingPosts(posts);
    }, [sortButtonName]);

    function sortingPosts(arrayOfPosts) {
        let sortedPosts = [...arrayOfPosts];
        if (sortButtonName === '') return;
        if (sortButtonName === 'From A to Z') {
            sortedPosts.sort((a, b) => {
                return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
            });
            setPosts(sortedPosts);
        }
        if (sortButtonName === 'From Z to A') {
            sortedPosts.sort((a, b) => {
                return a.title < b.title ? 1 : a.title > b.title ? -1 : 0;
            });
            setPosts(sortedPosts);
        }
    }

    return (
        <Card>
            <Card.Body>
                <h2 style={{ textAlign: 'center' }}>Posts</h2>
                <Search
                    setPosts={setSearchedPosts}
                    setSortButtonName={setSortButtonName}
                />
                <Paginatior
                    currentPage={currentPage}
                    totalPosts={totalNumberOfPosts}
                    onPageChange={(page) => setCurrentPage(page)}
                    pageSize={pageSize}
                    nearNumbersCount={nearNumbersCount}
                />
                <Sorting
                    buttonName={sortButtonName}
                    setButtonName={setSortButtonName}
                />
                {isLoading === false ? (
                    postsError.length === 0 ? (
                        posts.map((post) => (
                            <PostList key={post.id} post={post} />
                        ))
                    ) : (
                        <ErrorMessage error={postsError} />
                    )
                ) : (
                    <Loader />
                )}
            </Card.Body>
        </Card>
    );
};

export default Posts;
