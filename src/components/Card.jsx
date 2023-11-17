import { Link } from 'react-router-dom'

function Card(props) {
   return (
      <span>
         <button onClick={() => { props.onClose(props.id) }}>X</button>

         <h3>{props.name}</h3>
         <h4>Status: {props.status}</h4>
         <h4>Species: {props.species}</h4>
         <h4>Gender: {props.gender}</h4>
         <h4>Origin: {props.origin}</h4>
         <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt={props.name} />
         </Link>
      </span>
   );
}

// origin solo, porque en app mandan asi el origin.name
// no dejar el boton dentro del link, chocan las funciones
export default Card;