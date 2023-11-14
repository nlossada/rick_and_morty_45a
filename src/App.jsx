import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';

import { useState } from 'react';
import axios from 'axios';

function App() {

  const [characters, setCharacters] = useState([])

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      }
    );
  }

  function onClose(id) {
    const filterCharacters = characters.filter((element) => element.id !== Number(id))
    setCharacters(filterCharacters)
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch}></Nav>
      <Cards characters={characters} onClose={onClose} />

    </div>
  );
}

export default App;

// si exportas por default character, puedo traerlo sin nombre o con el nombre que quiera
// el export común, con nombre en un objeto, lo tengo que destructuring
