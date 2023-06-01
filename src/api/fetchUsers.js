import axios from 'axios';
import { setUsers } from '../store/reducers/posts/PostsSlice';

export const getUsers = async () => {
    return await axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.data);
};
