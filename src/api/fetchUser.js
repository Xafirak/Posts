import axios from 'axios';

export const getUser = async (id) => {
    return await axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.data);
};

export const getUserPosts = async (id) => {
    return await axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res) => res.data);
};
