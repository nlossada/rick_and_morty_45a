import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import NotFound from './components/NotFound/NotFound.jsx'
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import Episodes from './components/Episodes/Episodes.jsx';
import { useState, useEffect, useDebugValue } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';


function App() {

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false);
  const EMAIL = "natilossada@hotmail.com"
  const PASSWORD = "rick1510"


  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  //function search bar input -characters
  async function onSearch(id) {
    try {
      //evitar personajes repetidos
      const characterId = characters.filter((element) => element.id === Number(id))
      if (characterId.length) { // si tiene algo es porque ya existe, debe tener un personaje[0]
        return window.alert(`The character ${characterId[0].name} already exists`);
      }
      const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
        setCharacters([...characters, data]);
        navigate('/home')
      }
    } catch (error) {
      window.alert('ID must be between 1 and 826!')
    }
  }



  //function click, button close on card y favorites, que no lo muestre a la card en Home ni en Favorites
  function onClose(id) {
    const filterCharacters = characters.filter((element) => element.id !== Number(id))
    setCharacters(filterCharacters)
    dispatch(removeFav(id))  //cuando apreta cruz, también saca de favoritos con estado global y actions
  }

  //Random search on nav - search bar
  function onRandomSearch() {
    const randomId = Math.floor(Math.floor(Math.random() * 826) + 1)
    onSearch(randomId)
  }

  //Login page - validacion en el back
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios.get(URL + `?email=${email}&password=${password}`)
      const { access } = data
      if (access) {
        setAccess(access);
        access && navigate('/home');
      } else {
        window.alert("Invalid password or email")
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  // Pedido de login en landing!!
  useEffect(() => {
    !access && navigate('/home'); //para deshabilitar "/home" - p habilitar va sin home "/"
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
          path='/favorites'
          element={<Favorites onClose={onClose} />}
        />
        <Route
          path='/episodes'
          element={<Episodes />}
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

