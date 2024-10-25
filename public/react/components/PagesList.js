import React from 'react'
import { Page } from './Page'
import {AddPage} from './AddPage'

export const PagesList = ({ pages, pageId, setPageId }) => {
	if (pageId === `home`){
		return (
		<>{pages.map((page, idx) => {return <h3 onClick={() => setPageId(page.id)} key={page.id} >{page.title}</h3>})}
		<br></br>
		<button onClick={() => setPageId(`add`)}>Create New Page</button>
		</>)

	} else if (pageId === `add`){
		return(
			<>
			<AddPage setPageId={setPageId} />
			</>)
	}
	else {
		return (
		<>{pages.map((page, idx) => {return <Page page={page} key={idx} pageId={pageId} setPageId={setPageId} />})}
		</>)}
}
