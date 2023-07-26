import React from 'react';
import Post from './Post';

const Posts = () => {
    return (
        <div className='postHolder'>
            <h2>Posts</h2>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;