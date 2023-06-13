import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: [],
    userPosts: [],
    isLoading: true,
    error: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isLoading = false;
        },
        setUserPosts(state, action) {
            state.userPosts = action.payload;
            state.isLoading = false;
        },
        setIsLoadingUser(state, action) {
            state.isLoading = action.payload;
        },
        setUserError(state, action) {
            state.error = action.payload;
        },
    },
});

export const GET_USER = 'GET_USER';
export const GET_USER_POSTS = 'GET_USER_POSTS';
export const fetchUser = (payload) => ({ type: 'GET_USER', payload });
export const fetchUserPosts = (payload) => ({
    type: 'GET_USER_POSTS',
    payload,
});
export const { setUser, setIsLoadingUser, setUserError, setUserPosts } =
    userSlice.actions;

export default userSlice.reducer;
