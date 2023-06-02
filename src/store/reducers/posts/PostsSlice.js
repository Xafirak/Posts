import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: true,
    error: '',
};

const postsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.posts = action.payload;
            state.isLoading = false
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});


export const FETCH_USERS = 'FETCH_USERS'
export const fetchAllUsers = () => ({ type: 'FETCH_USERS' });
export const { setUsers, setIsLoading, setError } = postsSlice.actions;

export default postsSlice.reducer;
