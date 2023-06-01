import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchAllUsers, setUsers } from '../store/reducers/posts/PostsSlice';
import { getUsers } from './../api/fetchUsers';

const delay = () => new Promise((res) => setTimeout(res, 5000));

function* fetchUsersWorker() {
    yield delay();
    const data = yield call(getUsers);
    yield put(setUsers(data));
}

export function* usersWatcher() {
    yield takeEvery(fetchAllUsers, fetchUsersWorker);
}
