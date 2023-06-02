import { put, takeEvery, call } from 'redux-saga/effects';
import { getPosts } from '../api/fetchPosts';
import {
    FETCH_POSTS,
    setErrorPosts,
    setPosts,
} from './../store/reducers/posts/PostsSlice';

function* fetchPostsWorker() {
    try {
        const data = yield call(getPosts);
        yield put(setPosts(data));
    } catch (err) {
        yield put(setErrorPosts(err));
    }
}

export function* postsWatcher() {
    yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}
