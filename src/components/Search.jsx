import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { useSelector } from 'react-redux';

const Search = ({ setPosts }) => {
    const inputRef = useRef();
    const allPosts = useSelector((state) => state.posts.posts);
    const [filteredComments, setFilteredComments] = useState([]);

    useEffect(() => {
        setPosts(filteredComments);
    }, [filteredComments]);

    
    function handleSearch() {
        if (inputRef.current.value.length > 0) {
            let postComments = allPosts.filter((post) =>
                post.title.includes(inputRef.current.value)
            );
            setFilteredComments((prev) => postComments);
        } else {
            setFilteredComments(allPosts);
        }
    }

    function clearInputHandler() {
        inputRef.current.value = '';
        setPosts(allPosts);
    }

    return (
        <InputGroup
            className="mb-3"
            style={{
                width: '700px',
                alignItems: 'center',
            }}
        >
            <CloseButton onClick={() => clearInputHandler()} />
            <Form.Control ref={inputRef} placeholder="Search post's title..." />

            <Button onClick={() => handleSearch()} variant="outline-secondary">
                Search!
            </Button>
        </InputGroup>
    );
};

export default Search;
