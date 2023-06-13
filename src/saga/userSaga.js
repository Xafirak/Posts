import { call, delay, put, takeEvery } from 'redux-saga/effects';
import {
    GET_USER,
    GET_USER_POSTS,
    setUser,
    setUserError,
    setUserPosts,
} from '../store/reducers/data/UserSlice';
import { getUser, getUserPosts } from './../api/fetchUser';

function* userWorker(action) {
    try {
        yield delay(500);
        const user = yield call(getUser, action.payload);
        yield put(setUser(user));
    } catch (err) {
        yield put(setUserError(err));
    }
}

function* userPostsWorker(action) {
    try {
        const userPosts = yield call(getUserPosts, action.payload);
        yield put(setUserPosts(userPosts));
    } catch (err) {
        yield put(setUserError(err));
    }
}

export function* userWatcher() {
    yield takeEvery(GET_USER, userWorker);
    yield takeEvery(GET_USER_POSTS, userPostsWorker);
}
