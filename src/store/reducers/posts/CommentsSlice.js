import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments: [],
    isLoading: true,
    error: '',
};

const UsersSlice = createSlice({
    name: 'coments',
    initialState,
    reducers: {
        setComments(state, action) {
            state.comments = action.payload;
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

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchAllComments = () => ({ type: 'FETCH_COMMENTS' });
export const { setComments, setIsLoadingComments, setErrorComments } =
    UsersSlice.actions;

export default UsersSlice.reducer;
