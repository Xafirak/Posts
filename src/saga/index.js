import { all } from 'redux-saga/effects';
import { fetchCommentsWatcher } from './commentsSaga';
import { postsWatcher } from './postsSaga';

export function* rootWatcher() {
    yield all([postsWatcher(), fetchCommentsWatcher()]);
}
