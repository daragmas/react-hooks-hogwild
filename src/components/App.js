import React, { useState } from "react";
import Nav from "./Nav";
import PorkerCards from './PorkerCards'
import Filter from './Filter'

import hogs from "../porkers_data";

function App() {
	const [greasedFilter, setGreasedFilter] = useState('All')
	const [weightSort, setWeightSort] = useState('')
	const [nameSort, setNameSort] = useState('')

	const handleGreasedFilter = (e) => {
		setGreasedFilter(e.target.value)
	}

	const handleWeightSort = (e) => {
		setWeightSort(e.target.value)
	}

	const handleNameSort = (e) => {
		setNameSort(e.target.value)
	}

	let hogList = hogs.filter((hog) => greasedFilter === 'All' ? true :	`${hog.greased}` === greasedFilter)
	
	hogList = weightSort===''? hogList:
		(weightSort==='Ascending'? 
			hogList.sort((a,b)=>a.weight-b.weight):
			hogList.sort((a,b)=>b.weight-a.weight))

	hogList = nameSort === '' ? hogList : 
		(nameSort === 'Ascending' ?
			hogList.sort((a, b) => {
				const nameA = a.name 
				const nameB =  b.name
				return nameA < nameB ? 1:-1
			}) :
			hogList.sort((a, b) => {
				const nameA = a.name
				const nameB = b.name
				return nameA > nameB ? 1 : -1
			})
		)

	return (
		<div className="App">
			<Nav />
			<Filter 
				greasedFilter={greasedFilter} 
				onGreasedFilter={handleGreasedFilter} 
				onWeightSort={handleWeightSort}
				onNameSort={handleNameSort}/>
			<PorkerCards hogs={hogList} />
		</div>
	);
}

export default App;
