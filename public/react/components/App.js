import React, { useEffect, useState } from 'react'
import { PagesList } from './PagesList'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  const [pages, setPages] = useState([])
  const [pageId, setPageId] = useState(`home`)

  useEffect(() => {
    async function fetchPages () {
      try {
        const response = await fetch(`${apiURL}/wiki`)
        const pagesData = await response.json()
        setPages(pagesData)
      } catch (err) {
        console.log('Oh no an error! ', err)
      }
    }

    fetchPages()
  }, [pageId])

  return (
		<main>
      <h1 onClick={() => setPageId(`home`)}>WikiVerse</h1>
      <br></br>
			<h2>An interesting 📚</h2>
      <br></br>
			<PagesList pages={pages} pageId={pageId} setPageId={setPageId} />
		</main>
  )
}
