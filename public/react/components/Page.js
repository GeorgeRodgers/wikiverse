import React, { useState, useEffect } from 'react'
import apiURL from '../api'

export const Page = ({page, pageId, setPageId}) => {

  const [author, setAuthor] = useState(``)
  const [tags, setTags] = useState([])

  if (pageId === page.id){

    async function getSlug(){
      const res = await fetch(`${apiURL}/wiki/${page.slug}`)
      const data = await res.json()
      setAuthor(data.author.name)
      setTags(data.tags.map(tag => tag.name))
    }
    useEffect(() => {
      getSlug()
    }, [])
    
    async function deletePage(){
      const res = await fetch(`${apiURL}/wiki/${page.slug}`, {
        method: "DELETE"
      });
      setPageId('home')
    }

    return (
    <>
      <h3>{page.title}</h3>
      <br></br>
      <p><strong>Author: </strong>{author}</p>
      <p><strong>Published: </strong>{new Date(page.createdAt).toLocaleDateString()}</p>
      <p><strong>Post:</strong></p>
      <p>{page.content}</p>
      <p><strong>Tags:</strong></p>
      {tags.map((tag, idx) => <p key={idx} >#{tag}</p>)}
      <br></br>
      <button onClick={() => setPageId('home')}>Back to Wiki List</button>
      <button onClick={deletePage}>Delete Page</button>
      <br></br>
    </>
    )
  }
}
