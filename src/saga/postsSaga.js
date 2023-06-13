import { put, takeEvery, call } from 'redux-saga/effects';
import { getPosts } from '../api/fetchPosts';
import { FETCH_POSTS, setErrorPosts, setPosts, SET_SEARCHED_POSTS } from '../store/reducers/data/PostsSlice';


function* fetchPostsWorker() {
    try {
        const data = yield call(getPosts);
        yield put(setPosts(data));
    } catch (err) {
        yield put(setErrorPosts(err));
    }
}
function* setPostsworker(posts) {
    yield setPosts(posts);
}

export function* postsWatcher() {
    yield takeEvery(FETCH_POSTS, fetchPostsWorker);
    yield takeEvery(SET_SEARCHED_POSTS, setPostsworker);
}
