import React, { useState, useEffect } from "react"
import { Grid, OutlinedInput, Button } from "@material-ui/core/"
import { makeStyles } from "@material-ui/styles";
import SearchIcon from '@material-ui/icons/Search';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const useStyles = makeStyles(theme => ({
    inputContainer: {
        padding: theme.spacing(1.5, 0)
    },
    inputRoot: {
        borderRadius: '2px 0 0 2px',
        height: theme.spacing(4),
    },
    buttonRoot: {
        borderRadius: '0 2px 2px 0',
        height: theme.spacing(4),
        boxShadow: 'none',
        backgroundColor: theme.palette.grey[100],
        borderLeft: 'none'
    },
    searchIcon: {
        color: theme.palette.grey[600]
    }
}));



function SearchBar({ setSrc }) {
    const classes = useStyles();
    const [searchInput, setSearchInput] = useState('')

    useEffect( () => {
        fetchSearchApi('')
        // eslint-disable-next-line
    }, [])

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

    const onClickSearchButton = (e) => {
        e.preventDefault();
        fetchSearchApi(searchInput);
    }

    return (
        <form>
            <Grid container justify="center" className={classes.inputContainer}>  
                <Grid item xs={6}>
                    <OutlinedInput 
                        classes={{ root: classes.inputRoot }}
                        autoFocus 
                        fullWidth
                        size="small" 
                        placeholder="Search"
                        onChange={onChangeSearchInput} 
                        />
                </Grid>
                <Grid item>
                    <Button 
                        classes={{ root: classes.buttonRoot }}
                        type="submit" 
                        onClick={onClickSearchButton} 
                        variant="outlined">
                        <SearchIcon fontSize="small" className={classes.searchIcon}/>
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default SearchBar