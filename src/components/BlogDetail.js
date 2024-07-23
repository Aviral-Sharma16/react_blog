import React from 'react';
import {Button} from '@mui/material';
import {useParams,useNavigate} from 'react-router-dom';

const BlogDetail = ({posts}) =>{
    const {id} = useParams();
    const postIndex = parseInt(id);
    const post = posts[postIndex%5];
    const navigate = useNavigate();
    
    if(!post){
        return <h2>Post Unavailable!!</h2>
    }

    return(
        <div>
            <Button onClick={() => navigate('/')}>Back</Button>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.urlToImage && <img src={post.urlToImage} alt={post.title}/>}
        </div>
    );
};

export default BlogDetail;