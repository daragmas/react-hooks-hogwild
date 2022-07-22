
const Filter = ({onGreasedFilter, onNameSort, onWeightSort})=>{
    return(
        <div>
            <select onChange={onWeightSort}>
                <option value=''>Sort by Weight</option>
                <option>Ascending</option>
                <option>Descending</option>
            </select>
            <select onChange={onNameSort}>
                <option value=''>Sort by Name</option>
                <option>Ascending</option>
                <option>Descending</option>
            </select>
            <select onChange={onGreasedFilter}>
                <option value='All'>All</option>
                <option value={true}>Greased</option>
                <option value={false}>Not Greased</option>
            </select>
        </div>
    )
}


export default Filter