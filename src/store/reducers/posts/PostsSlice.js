import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: false,
    error: '',
};

const postsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.posts = action.payload;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const fetchAllUsers = () => ({ type: 'FETCH_USERS' });
export const { setUsers, setIsLoading, setError } = postsSlice.actions;

export default postsSlice.reducer;
