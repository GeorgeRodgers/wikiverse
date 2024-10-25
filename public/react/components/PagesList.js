import React from 'react'
import { Page } from './Page'

export const PagesList = ({ pages, pageId, setPageId }) => {
	if (pageId === `home`){
		return <>{pages.map((page, idx) => {return <h3 onClick={() => setPageId(idx + 1)} key={idx} >{page.title}</h3>})}</>

	} else {
  return <>{pages.map((page, idx) => {return <Page page={page} key={idx} pageId={pageId} setPageId={setPageId} />})}</>}
}
