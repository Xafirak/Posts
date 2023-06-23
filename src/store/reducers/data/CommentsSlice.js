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
        setErrorComments(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const GET_COMMENT_ID = 'GET_COMMENT_ID';
export const getCommentId = (payload) => ({ type: 'GET_COMMENT_ID', payload });
export const { setComments, setIsLoadingComments, setErrorComments } =
    UsersSlice.actions;

export default UsersSlice.reducer;
