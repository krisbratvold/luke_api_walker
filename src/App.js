import './App.css';
import React, { useState } from 'react';
import {Link, navigate, Router} from "@reach/router"

import People from './Views/People';
import Planets from './Views/Planets';
import NotFound from './Views/NotFound';

function App() {
  const [url,setUrl] = useState({
    option:"people",
    id: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/"+ url.option + "/" + url.id)
  }

  const handleChange = (e) => {
    setUrl({
      ...url,[e.target.name]:e.target.value
    })
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Search for: </label>
        <select name="option" value={url.option} onChange={handleChange}>
        <option value="people">People</option> 
        <option value="planets">Planets</option> 
      </select>
        <label>ID: </label>
        <input name="id" value={url.id} onChange={handleChange} type="number"/>
      <button>Search</button>
      </form>
      <Router>
        <People path="/people/:id"/>
        <Planets path="/planets/:id"/>
        <NotFound default/>
      </Router>
    </div>
  );
}

export default App;
