import React, { useState, useEffect } from "react"
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const useStyles = makeStyles(theme => ({
    root: {
        lineHeight: 1,
        // color: theme.palette.primary.main
    },
}));



function PlayListItem({ src }) {
    const classes = useStyles();
    const [videoStat, setVideoStat] = useState(null)

    useEffect( () => {
        getVideoInfo() 
        // eslint-disable-next-line
    }, [])

    const getVideoInfo = () => {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${src.id.videoId}&key=${API_KEY}`
        fetch(url)
          .then(response => response.json())
          .then(getVideoStat)
    }

    const getVideoStat = (data) => {
        setVideoStat(data.items[0].statistics)
    }

    const getYoutubeSrc = () => {
        return `https://www.youtube.com/embed/${src.id.videoId}`
    }

    return (
        <Grid item container justify="center" spacing={3}>
            <Grid item>
                <iframe title="sex" width="300" height="166" src={getYoutubeSrc()} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="subtitle1" className={classes.root}>{src.snippet.title}</Typography>
                <Typography variant="subtitle2" gutterBottom color="textSecondary">{videoStat?.viewCount} views</Typography>
                <Typography variant="body2" color="textSecondary">{src.snippet.description}</Typography>
                <Typography variant="caption" color="textSecondary">{src.snippet.publishTime}</Typography>
            </Grid>
        </Grid>
    )
   
}

export default PlayListItem