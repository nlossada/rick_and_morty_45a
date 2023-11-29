import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({ characters, onClose }) {
   // al destructuring, queda un array characters [{r}, {m}, {s}..]   , si no sería {[]}
   return (
      <div className={style.container}>
         { //Si no hay characters en array, muestra el h2, si hay que muestre la card
            !characters.length ?
               <h2>Add a character by id or a random one</h2>
               :
               characters.map((character) =>
               // return (<Card key={character.id} character={character} > </Card>)
               (<Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={onClose}
               />)
               )
         }
      </div>
   )
}
// lo dejo destructure desde acá porque si no no anda boton porque está definida la función onclose
