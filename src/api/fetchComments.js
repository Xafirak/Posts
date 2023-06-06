import axios from 'axios';

export const getComments = async (id) => {
    return await axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((res) => res.data);
};
