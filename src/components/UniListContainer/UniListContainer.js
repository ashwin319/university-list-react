import { useState, useEffect } from 'react';
import axios from 'axios';
import UniversityItem from '../UniversityItem/UniversityItem';

function UniListContainer({ updateUniDetails, country, search, updateSearch }) {
    const [uniList, setUniList] = useState([])
    const [filteredList, setFilteredList] = useState([])

    // if(!uniList || uniList.length === 0) {
    //     axios.get('http://universities.hipolabs.com/search?country=United+States')
    //         .then((response) => {
    //             setUniList(response.data)
    //         })
    // }

    useEffect(() => {
        console.log('Country fetched: ', country)
        const secretKey = process.env.UNI_LIST_SECRET_KEY;
        axios.get(`https://universities.hipolabs.com/search?country=${country}&secret_key=${secretKey}`)
            .then((response) => {
                const allUnis = response.data.splice(0, 100)
                setUniList(allUnis)
                setFilteredList(allUnis)
                updateSearch('')
            })
    }, [country, updateSearch])

    useEffect(() => {
        const filteredUniList = uniList.filter((uni) => uni.name.includes(search))
        setFilteredList(filteredUniList)
    }, [search, uniList])

    return (
        <div className="container">
            Uni List for Country {country}

            <div>
                {filteredList.map((uni) => (
                    <UniversityItem 
                        key={`${uni.name}_${uni.country}`} 
                        university={uni}
                        updateUniDetails={updateUniDetails}
                    />
                ))}
            </div>
        </div>
    )
}

export default UniListContainer;
