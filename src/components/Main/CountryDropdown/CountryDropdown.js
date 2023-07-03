function CountryDropdown({ country, updateCountry }) {

    const handleSelectionChange = (event) => {
        updateCountry(event.target.value)
    }

    return (
        <div>
            <select value={country} onChange={handleSelectionChange}>
                <option>United States</option>
                <option>Canada</option>
            </select>
        </div>
    )
}

export default CountryDropdown;