import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllComments } from '../store/reducers/posts/CommentsSlice';
import { fetchAllPosts } from '../store/reducers/posts/PostsSlice';
import PostList from './PostList';

const Posts = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const posts = useSelector((state) => state.posts.posts);
    // @ts-ignore
    const comments = useSelector((state) => state.comments.comments);
    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchAllPosts());
            dispatch(fetchAllComments());
        }, 500);
    }, []);
    return (
        <div>
            <h2>Posts</h2>
            {posts.length > 1 && comments.length > 1 ? (
                posts.map((post) => {
                    let newComments = [];
                    return comments.map((comment) => {
                        if (comment.postId === post.id) {
                            newComments.push(comment);
                            return (
                                <PostList
                                    key={post.id}
                                    post={post}
                                    comments={newComments}
                                />
                            );
                        }
                    });
                })
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};

export default Posts;
