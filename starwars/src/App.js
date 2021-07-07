import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components'

const Header = styled.h1`
  color: lightgreen;
  text-align: center;
  font-size: 50px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData] = useState([])
const [searchWord, setSearchWord] = useState("");
const handleChange = e => {
  setSearchWord(e.target.value)
//console.log(searchWord);
}
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about whch state and/or props it should
  // sync up with, if any
useEffect(() => {
  axios
    .get('https://rickandmortyapi.com/api/character')
    .then(response => {
      //console.log(response.data.results)
      const initialArray = response.data.results
      const filteredData = initialArray.filter((character) => {
        return character.name.toLowerCase().includes(searchWord.toLowerCase())
      })
      setData(filteredData);
    })
}, [searchWord])
//console.log(data);
  return (
    <div className="App">
      <Header>Characters</Header>
      <label>
        Search character here:
        <input type='text' name='search' value={searchWord} onChange={handleChange}/>
      </label>
      <Character characterArray={data}/>
    </div>
  );
}

export default App;
