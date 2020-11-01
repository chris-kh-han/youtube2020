import React, { useState } from "react"

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;


function SearchBar({ setSrc }) {
    const [searchInput, setSearchInput] = useState('')

    const onChangeSearchInput = (e) => {
        setSearchInput(e.target.value)
    }

    const fetchSearchApi = (input) => {
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${input}&key=${API_KEY}`
        fetch(url)
          .then(response => response.json())
          .then(parseData)
    }

    const parseData = (data) => {
        const results = data.items.filter(item => item.id.kind === "youtube#video");
        setSrc(results)
    }

    const onClickSearchButton = () => {
        fetchSearchApi(searchInput);
    }



    return (
        <>
            <input type="text" placeholder="Search" onChange={onChangeSearchInput}></input>
            <button onClick={onClickSearchButton}>Submit</button>
        </>
    )
}

export default SearchBar