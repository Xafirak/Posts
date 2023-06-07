import { all } from 'redux-saga/effects';
import { commentsWatcher } from './commentsSaga';
import { postsWatcher } from './postsSaga';
import { setPostsWatcher } from './setSearchedPostsSaga';

export function* rootWatcher() {
    yield all([postsWatcher(), commentsWatcher(), setPostsWatcher()]);
}
