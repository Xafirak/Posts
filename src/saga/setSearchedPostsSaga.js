import { put, takeEvery, call } from 'redux-saga/effects';
import {
    setPosts,
    SET_SEARCHED_POSTS,
} from './../store/reducers/posts/PostsSlice';

function* setPostsworker(posts) {
    yield setPosts(posts);
}

export function* setPostsWatcher() {
    yield takeEvery(SET_SEARCHED_POSTS, setPostsworker);
}
