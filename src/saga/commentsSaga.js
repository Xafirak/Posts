import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { getComments } from '../api/fetchComments';
import {
    GET_COMMENT_ID,
    setComments,
    setErrorComments,
} from './../store/reducers/posts/CommentsSlice';

function* commentsWorker(action) {
    try {
        yield delay(500)
        const posts = yield call(getComments, action.payload);
        yield put(setComments(posts));
    } catch (err) {
        yield put(setErrorComments(err));
    }
}

export function* commentsWatcher() {
    yield takeEvery(GET_COMMENT_ID, commentsWorker);
}
