import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    allComments: [],
    isLoading: true,
    error: '',
};

const UsersSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments(state, action) {
            state.allComments.push(...action.payload);
            state.isLoading = false;
        },
        setIsLoadingComments(state, action) {
            state.isLoading = action.payload;
        },
        setErrorComments(state, action) {
            state.error = action.payload;
        },
    },
});

export const GET_COMMENT_ID = 'GET_COMMENT_ID';
export const getCommentId = (payload) => ({ type: 'GET_COMMENT_ID', payload });
export const fetchComments = (payload) => ({ type: 'FETCH_COMMENTS', payload });
export const { setComments, setIsLoadingComments, setErrorComments } =
    UsersSlice.actions;

export default UsersSlice.reducer;
