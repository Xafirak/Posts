import axios from 'axios';

export const getComments = async () => {
    return await axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.data);
};
