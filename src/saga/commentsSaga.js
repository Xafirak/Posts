import { call, put, takeEvery } from 'redux-saga/effects';
import { getComments } from '../api/fetchComments';
import {
    FETCH_COMMENTS,
    setComments,
    setErrorComments,
} from './../store/reducers/posts/CommentsSlice';

function* fetchCommentsWorker() {
    try {
        const posts = yield call(getComments);
        yield put(setComments(posts));
    } catch (err) {
        yield put(setErrorComments(err));
    }
}

export function* fetchCommentsWatcher() {
    yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
}
