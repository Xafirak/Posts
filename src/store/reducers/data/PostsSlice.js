import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: true,
    error: '',
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
            state.isLoading = false;
        },
        setErrorPosts(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const FETCH_POSTS = 'FETCH_POSTS';
export const SET_SEARCHED_POSTS = 'SET_SEARCHED_POSTS';
export const fetchAllPosts = () => ({ type: 'FETCH_POSTS' });
export const setSearchPosts = (payload) => ({
    type: 'SET_SEARCHED_POSTS',
    payload,
});
export const { setPosts, setErrorPosts } = postsSlice.actions;

export default postsSlice.reducer;
