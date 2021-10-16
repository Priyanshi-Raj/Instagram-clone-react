import React , {useState}from 'react';
import './App.css';
import Post from './Post'


function App() {
  const[posts ,setPosts] = useState([
    {
      username: "",
      caption: "",
      imageUrl:""
    },
    {
      username: "",
      caption: "",
      imageUrl:""
    }
  ]);
  return (
    <div className="App">
      <div className="app_header">
        <img src="" alt="" className="app_headerImage" />
      </div>
      {
        posts.map(post=>{
          <Post username={post.username} caption={post.caption} imageUrl = {post.imageUrl}/>
        })
      }
     
      <Post username="" caption="" imageUrl=""/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}

export default App;
