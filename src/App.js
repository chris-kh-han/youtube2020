import React, { useState } from "react";
import SearchBar from './components/SearchBar'
import PlayListItem from './components/PlayListItem'

import './App.css';

function App() {
  const [src, setSrc] = useState([])
  

  const renderPlayList = () => {
    return src.map(item => <PlayListItem src={item} />)
  }

  return (
    <div>
      <SearchBar setSrc={setSrc} />
      {!!src.length && renderPlayList()}

    </div>
  );
}

export default App;
