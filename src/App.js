import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import './styles.css'

const App = () => {
  const[posts,setPosts] = useState([]);

  return(
    <Router basename="/react_blog">
      <Routes>
        <Route path = "/" element={<BlogList posts={posts} setPosts={setPosts}/>}/>
        <Route path="/post/:id" element={<BlogDetail posts={posts}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
