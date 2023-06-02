import { put, takeEvery, call } from 'redux-saga/effects';
import {
    FETCH_USERS,
    setError,
    setUsers,
} from '../store/reducers/posts/PostsSlice';
import { getUsers } from './../api/fetchUsers';

function* fetchUsersWorker() {
    try {
        const data = yield call(getUsers);
        yield put(setUsers(data));
    } catch (err) {
        yield put(setError(err));
    }
}

export function* usersWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsersWorker);
}
