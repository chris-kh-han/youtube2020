import React, { useState } from "react";
import { Grid, Paper } from '@material-ui/core';

import SearchBar from './components/SearchBar'
import PlayListItem from './components/PlayListItem'

import './App.css';

function App() {
  const [src, setSrc] = useState([])
  

  const renderPlayList = () => {
    return src.map( (item, index) => <PlayListItem key={index} src={item} />)
  }

  return (
    
      <Grid container justify="center" spacing={5}>
        <Grid item xs={12}>
          <Paper elevation={0}>
            <SearchBar setSrc={setSrc} />
          </Paper>
        </Grid>
        
        <Grid item container>
          {!!src.length && renderPlayList()}
        </Grid>
      </Grid>
    
  );
}

export default App;
