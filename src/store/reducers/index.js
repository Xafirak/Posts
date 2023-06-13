import { combineReducers } from 'redux';
import CommentsSlice from './data/CommentsSlice';
import PostsSlice from './data/PostsSlice';
import UserSlice from './data/UserSlice';

export const rootReducer = combineReducers({
    posts: PostsSlice,
    comments: CommentsSlice,
    user: UserSlice,
});
