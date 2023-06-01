import React from 'react';

const PostList = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <div className="body">{post.body}</div>
            <div className="comments">comments</div>
        </div>
    );
};

export default PostList;
