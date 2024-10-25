import React, { useState, useRef } from 'react'
import apiURL from '../api'

export const AddPage = ({setPageId}) => {

  const defaultPost = {
    title: "Title",
    content: "Post Content",
    name: "Author Name",
    email: "Author Email",
    tags: "Tags"
  }

  const [post, setPost] = useState(defaultPost);

    async function handleSubmit(e){
      const res = await fetch(`${apiURL}/wiki`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      });
      const data = await res.json();
      setPost(defaultPost);
    };

    const formRef = useRef();

    function reset(e){
      e.preventDefault();
      setPost(defaultPost);
      formRef.current.reset()
  };

    return (
    <>
      <h2>Create New Page</h2>
      <br></br>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input placeholder={post.title} onChange={(e) => setPost({...post, title: e.target.value})}></input>
        <br></br>
        <input placeholder={post.content} onChange={(e) => setPost({...post, content: e.target.value})}></input>
        <br></br>
        <input placeholder={post.name} onChange={(e) => setPost({...post, name: e.target.value})}></input>
        <br></br>
        <input placeholder={post.email} onChange={(e) => setPost({...post, email: e.target.value})}></input>
        <br></br>
        <input placeholder={post.tags} onChange={(e) => setPost({...post, tags: e.target.value})}></input>
        <br></br>
        <button type='submit'>Create Page</button>
        <button onClick={reset}>Reset</button>
      </form>
      <br></br>
      <button onClick={() => setPageId('home')}>Back to Wiki List</button>
      <br></br>
      <br></br>
      <p>this is the post: {JSON.stringify(post)}</p>
    </>)
}
