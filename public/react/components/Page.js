import React, { useState, useEffect } from 'react'
import apiURL from '../api'

export const Page = ({page}) => {

  const [author, setAuthor] = useState(``)
  const [tags, setTags] = useState([])

  async function getSlug(){
    const res = await fetch(`${apiURL}/wiki/${page.slug}`)
    const data = await res.json()
    setAuthor(data.author.name)
    setTags(data.tags.map(tag => tag.name))
  }
  
  getSlug()

  return <>
    <h3>{page.title}</h3>
    <br></br>
    <p><strong>Author: </strong>{author}</p>
    <p><strong>Published: </strong>{new Date(page.createdAt).toLocaleDateString()}</p>
    <p><strong>Post:</strong></p>
    <p>{page.content}</p>
    <p><strong>Tags:</strong></p>
    {tags.map(tag => <p>#{tag}</p>)}
    <br></br>
    
  </>
}
