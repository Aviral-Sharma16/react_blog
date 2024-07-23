import React from 'react';
import {Link} from 'react-router-dom';

const Blogitem = ({post,index}) =>{
    return(
        <div>
            <h2><Link to={'/post/&{index}'}>{post.Title}</Link></h2>
            <p>{post.description}</p>
            <p>{post.publishedAt}</p>
        </div>
    );
};

export default Blogitem;