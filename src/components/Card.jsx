export default function Card(props) {
   return (
            <span>
               <button onClick={props.onClose}>X</button>
               <h2>{props.name}</h2>
               <h4>Status: {props.status}</h4>
               <h4>Species: {props.species}</h4>
               <h4>Gender: {props.gender}</h4>
               <h4>Origin: {props.origin}</h4>
      
               <img src={props.image} alt={props.name} />
            </span>
         );
   }

// mi solución, trayendo character desde Cards y haciendo destructuring acá:
// esta es válida pero no anda botón porque no esta definida funcion onclose
   // export default function Card({ character, onClose }) {
   // return (
   //    <span>
   //       <button onClick={onClose}>X</button>
   //       <h2>{character.name}</h2>
   //       <h2>{character.status}</h2>
   //       <h2>{character.species}</h2>
   //       <h2>{character.gender}</h2>

   //       <img src={character.image} alt='Rick Sanchez' />
   //    </span>
   // );
// }

   
// origin solo, porque en app mandan asi el origin.name