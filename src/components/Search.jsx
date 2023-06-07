import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { useSelector } from 'react-redux';
import { setPosts, setSearchPosts } from '../store/reducers/posts/PostsSlice';

const Search = ({ setPosts }) => {
    const inputRef = useRef();
    const [inputValue, setInputValue] = useState('');
    const posts = useSelector((state) => state.posts.posts);

    function handleSearch() {
        setInputValue(inputRef.current.value);
        let postComments = posts.filter((post) =>
            post.title.includes(inputValue)
        );
        setPosts((post) => postComments);
        console.log(postComments);
    }
    return (
        <InputGroup
            className="mb-3"
            style={{
                width: '500px',
                alignItems: 'center',
            }}
        >
            <CloseButton />
            <Form.Control ref={inputRef} placeholder="Search post's title..." />
            <Button onClick={() => handleSearch()} variant="outline-secondary">
                Search!
            </Button>
        </InputGroup>
    );
};

export default Search;
