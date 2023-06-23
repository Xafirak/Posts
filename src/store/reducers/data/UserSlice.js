import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: [],
    userPosts: [],
    isUserLoading: true,
    isPostsLoading: true,
    userError: '',
    userPostsError: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isUserLoading = false;
        },
        setUserError(state, action) {
            state.userError = action.payload;
            state.isUserLoading = false;
        },
        setUserPosts(state, action) {
            state.userPosts = action.payload;
            state.isPostsLoading = false;
        },
        setUserPostsError(state, action) {
            state.userPostsError = action.payload;
            state.isPostsLoading = false;
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
export const { setUser, setUserError, setUserPosts, setUserPostsError } =
    userSlice.actions;

export default userSlice.reducer;
