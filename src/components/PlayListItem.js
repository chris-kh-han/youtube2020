import React, { useState, useEffect }from "react"

const API_KEY = process.env.YOUTUBE_API_KEY;

// import moment from 'moment';

function PlayListItem({ src }) {
    const [videoStat, setVideoStat] = useState(null)
    // const now = moment().format("MM-DD-YYYY");
    // const publishedAt = moment(src.snippet.publishTime)

    // useEffect( () => {
    //     getVideoInfo() 
    //     // eslint-disable-next-line
    // }, [])

    // const getVideoInfo = () => {
    //     const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${src.id.videoId}&key=${API_KEY}`
    //     fetch(url)
    //       .then(response => response.json())
    //       .then(getVideoStat)
    // }

    const getVideoStat = (data) => {
        setVideoStat(data.items[0].statistics)
    }

    const getYoutubeSrc = () => {
        return `https://www.youtube.com/embed/${src.id.videoId}`
    }

    return (
        <div>
            <iframe title="sex" width="300" height="166" src={getYoutubeSrc()} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>{src.snippet.title}</p>
            <p>{src.snippet.description}</p>
            <img src={src.snippet.thumbnails.default.url} alt="faker-akali" />
            <p>{videoStat?.viewCount}</p>
            <p>{src.snippet.publishTime}</p>
        </div>
    )
   
}

export default PlayListItem