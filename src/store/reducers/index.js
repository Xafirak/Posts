import { combineReducers } from 'redux';
import CommentsSlice from './posts/CommentsSlice';
import PostsSlice from './posts/PostsSlice';

export const rootReducer = combineReducers({
    posts: PostsSlice,
    comments: CommentsSlice,
});
