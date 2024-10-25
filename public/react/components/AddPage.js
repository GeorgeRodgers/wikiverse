import React, { useState, useRef } from 'react'
import apiURL from '../api'

export const AddPage = ({setPageId}) => {

  const defaultPost = {
    title: '',
    content: '',
    name: '',
    email: '',
    tags: ''
  }

  const [post, setPost] = useState(defaultPost);

    async function handleSubmit(){
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
        <input placeholder='Title' onChange={(e) => setPost({...post, title: e.target.value})}></input>
        <br></br>
        <input placeholder='Post Content' onChange={(e) => setPost({...post, content: e.target.value})}></input>
        <br></br>
        <input placeholder='Author Name' onChange={(e) => setPost({...post, name: e.target.value})}></input>
        <br></br>
        <input placeholder='Author Email' onChange={(e) => setPost({...post, email: e.target.value})}></input>
        <br></br>
        <input placeholder='Tags' onChange={(e) => setPost({...post, tags: e.target.value})}></input>
        <br></br>
        <button type='submit'>Create Page</button>
        <button onClick={reset}>Reset</button>
      </form>
      <br></br>
      <button onClick={() => setPageId('home')}>Back to Wiki List</button>
    </>)
}
