import React from 'react';
import userLogo from '../images/user.png';


//TODO  make styles
const PostList = ({ post }) => {
    return (
        <div className="">
            <h2>{post.title}</h2>
            <img style={{width:'50px', height:'50px'}} src={userLogo} alt="" />
            <div className="body">{post.body}</div>
            <div className="comments">comments</div>
        </div>
    );
};

export default PostList;
