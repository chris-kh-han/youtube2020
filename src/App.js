import React, { useState } from "react";
import { Grid, Paper } from '@material-ui/core';

import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import PlayListItem from './components/PlayListItem'
import ButtonIconList from './components/ButtonIconList'


import './App.css';

function App() {
  const [src, setSrc] = useState([])
 

  const renderPlayList = () => {
    return src.map( (item, index) => <PlayListItem key={index} src={item} />)
  }

  return (
    
      <Grid container justify="center">
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Logo />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0}>
            <SearchBar setSrc={setSrc} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <ButtonIconList />
          </Paper>
        </Grid>
        
        <Grid item container>
          {!!src.length && renderPlayList()}
        </Grid>
      </Grid>
    
  );
}

export default App;
