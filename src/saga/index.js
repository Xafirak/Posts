import { all } from 'redux-saga/effects';
import { commentsWatcher } from './commentsSaga';
import { postsWatcher } from './postsSaga';

export function* rootWatcher() {
    yield all([postsWatcher(), commentsWatcher()]);
}
