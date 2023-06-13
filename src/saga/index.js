import { all } from 'redux-saga/effects';
import { commentsWatcher } from './commentsSaga';
import { postsWatcher } from './postsSaga';
import { userWatcher } from './userSaga';

export function* rootWatcher() {
    yield all([postsWatcher(), commentsWatcher(), userWatcher()]);
}
