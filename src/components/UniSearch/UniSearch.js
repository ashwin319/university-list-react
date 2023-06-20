import './UniSearch.css'

function UniSearch({ search, updateSearch }) {
    const onSearchChange = (event) => {
        updateSearch(event.target.value)
    }

    return (
        <div className="uni-search">
            Search: 
            <input 
                onChange={onSearchChange}
                value={search}
                placeholder="Search for your uni here" 
            />
        </div>
    )
}

export default UniSearch