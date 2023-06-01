import { combineReducers } from 'redux';
import postsSlice from './posts/PostsSlice';

export const rootReducer = combineReducers({
    posts: postsSlice,
});
