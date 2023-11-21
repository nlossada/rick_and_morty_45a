import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../redux/actions';
import { useEffect, useState } from 'react';

function Card(props) {
   const dispatch = useDispatch()
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector(state => state.myFavorites)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         //REVISAR EL ARGUMENTO ID
         dispatch(removeFav(props.id))
      }
      if (!isFav) {
         setIsFav(true)
         // revisar si pasar props.id
         dispatch(addFav(props.id))

      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <span>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )

         }
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