import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App() {
  return (
    <div className='App'>
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} />
    </div>
  );
}
//elimine objeto de card de Rick porque no me andaba el map de card si no
// <Card
//    id={Rick.id}
//    name={Rick.name}
//    status={Rick.status}
//    species={Rick.species}
//    gender={Rick.gender}
//    origin={Rick.origin.name}
//    image={Rick.image}
//    onClose={() => window.alert('Emulamos que se cierra la card')}
// />
export default App;

// si exportas por default character, puedo traerlo sin nombre o con el nombre que quiera
// el export común, con nombre en un objeto, lo tengo que destructuring
