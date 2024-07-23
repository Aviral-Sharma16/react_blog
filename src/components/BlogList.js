import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button,CircularProgress} from '@mui/material';

const BlogList = ({posts,setPosts}) => {
    const [loading,SetLoading] = useState(true);
    const [page,setPage] = useState(1);
    const[totalResults,setTotalResults] = useState(0);

    useEffect(() =>{
        const savedPage = localStorage.getItem('currentPage');
        if(savedPage){
            setPage(parseInt(savedPage,10));
        }
    },[]);
    
    
    useEffect(() =>{
        const getPosts = async() => {
            SetLoading(true);
            try{
                const response = await axios.get('https://newsapi.org/v2/everything',{
                    params: {
                        q:'technology',
                        pageSize:5,
                        page:page,
                        apiKey: process.env.REACT_APP_NEWS_API_KEY,
                    },
                });
                console.log('API Response: ',response.data);
                setPosts(response.data.articles);
                setTotalResults(response.data.totalResults);
                localStorage.setItem('currentPage',page);
            } catch(error){
                console.error('Error fetching posts:',error);
            }finally{
                SetLoading(false);
            }
        };
        getPosts();
    },[page,setPosts]);

    if (loading) return <CircularProgress/>;

    return(
        <div>
            <h1>Blog Post</h1>
            {posts.map((post,index) => (
                <div key={index}>
                    <h2><Link to = {`/post/${index + (page-1)*5}`}>{post.title}</Link></h2>
                    <p>{post.description}</p>
                    <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                </div>
            ))}

            <div>
                <Button disabled={page===1} onClick={()=> setPage(page-1)}>Previous</Button>
                <Button displayed={page*5>= totalResults } onClick={() => setPage(page+1)}>Next</Button>
            </div>
        </div>
    );
};



export default BlogList;