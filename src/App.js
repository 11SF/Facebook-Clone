import React, {useState} from 'react';
import './App.css';

import Navbar from './Navbar';
import Input from './Input';
import Post from './Post'

let id = 1;
let picture_link;
function App() {
  const [posts,setPosts] = useState([]);

  function addPost(title) {
    picture_link = `https://source.unsplash.com/random?sig=${id}`;
    const newPost = {id, title, picture_link};
    setPosts([newPost, ...posts]);
    id += 1;
  }
  function deletePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id );
    setPosts(updatedPosts);
  }

  return (
    <div className="App">
      <Navbar/>
      <Input addPost={addPost}/>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} picture_link={post.picture_link} deletePost={ deletePost }/>
      ))}
    </div>
  );
}

export default App;
