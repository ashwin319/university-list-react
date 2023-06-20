import { useState } from "react";
import UniDetails from "../UniDetails/UniDetails";
import UniListContainer from "../UniListContainer/UniListContainer";
import UniSearch from "../UniSearch/UniSearch";
import CountryDropdown from "./CountryDropdown/CountryDropdown";

function Main() {

    // const uniDetails = {
    //     "country": "United States",
    //     "alpha_two_code": "US",
    //     "name": "Marywood University",
    //     "state-province": null,
    //     "domains": [
    //     "marywood.edu"
    //     ],
    //     "web_pages": [
    //     "http://www.marywood.edu"
    //     ]
    // }

    const [uniDetails, setUniDetails] = useState({})
    const [country, setCountry] = useState('Canada')
    const [search, setSearch] = useState('')

    return (
        <div className="mainContainer">
            <CountryDropdown country={country} updateCountry={setCountry} />
            <UniDetails details={uniDetails}/>
            <UniSearch search={search} updateSearch={setSearch} />
            <UniListContainer 
                search={search}
                updateSearch={setSearch}
                country={country} 
                updateUniDetails={setUniDetails} 
            />
        </div>
    )
}

export default Main;
