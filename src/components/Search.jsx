import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { useSelector } from 'react-redux';

const Search = ({ setPosts, setSortButtonName }) => {
    const inputRef = useRef();
    const allPosts = useSelector((state) => state.posts.posts);
    const [filteredComments, setFilteredComments] = useState([]);

    useEffect(() => {
        setPosts(filteredComments);
    }, [filteredComments]);

    function handleSearch() {
        let word = inputRef.current.value.trim();
        if (word.length > 0) {
            let postComments = allPosts.filter((post) =>
                RegExp('\\b' + word + '\\b').test(post.title)
            );
            // let postComments = allPosts.filter((post) =>
            //     post.title.includes(word)
            // );
            setFilteredComments((prev) => postComments);
        } else {
            setFilteredComments(allPosts);
        }
    }

    function clearInputHandler() {
        inputRef.current.value = '';
        setPosts(allPosts);
        setSortButtonName('')
    }

    return (
        <InputGroup
            className="mb-3"
            style={{
                width: '100%',
                alignItems: 'center',
            }}
        >
            <CloseButton onClick={() => clearInputHandler()} />
            <Form.Control
                onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : '')}
                ref={inputRef}
                placeholder="Search post's title..."
            />

            <Button onClick={() => handleSearch()} variant="outline-secondary">
                Search!
            </Button>
        </InputGroup>
    );
};

export default Search;
