import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import NotFound from './components/NotFound.jsx'
import Form from './components/Form.jsx';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function App() {

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false);
  const EMAIL = "natilossada@hotmail.com"
  const PASSWORD = "rick1510"


  const navigate = useNavigate();
  const location = useLocation();

  //function search bar input
  function onSearch(id) {
    //evitar mostrar personajes repetidos
    const characterId = characters.filter((element) => element.id === Number(id))
    if (characterId.length) { // si tiene algo es porque ya existe, debe tener un personaje[0]
      return window.alert(`El personaje ${characterId[0].name} ya existe`);
    }
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(
        ({ data }) => {
          if (data.name) {
            // setCharacters((oldChars) => [...oldChars, data]);
            setCharacters([...characters, data]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        }
      );
    navigate('/home')

  }

  //function click, button close on card
  function onClose(id) {
    const filterCharacters = characters.filter((element) => element.id !== Number(id))
    setCharacters(filterCharacters)
  }

  //Random search on nav - search bar
  function onRandomSearch() {
    const randomId = Math.floor(Math.floor(Math.random() * 826) + 1)
    onSearch(randomId)
  }

  //Login page - matching with var expression on this file
  function login(userData) {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true)
      navigate('/home')
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function logout() {
    setAccess(false)
    navigate('/')
  }



  return (
    <div className='App'>
      {
        location.pathname === "/" ? null : <Nav logout={logout} onSearch={onSearch} onRandomSearch={onRandomSearch}></Nav>
      }
      <Routes>
        <Route
          path='/'
          element={<Form login={login} />}
        />
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/detail/:id'
          element={<Detail />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>

    </div>
  );
}

export default App;

// si exportas por default character, puedo traerlo sin nombre o con el nombre que quiera
// el export común, con nombre en un objeto, lo tengo que destructuring
