import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';
import style from './Card.module.css';

function Card(props) {
   const dispatch = useDispatch()  // devuelve funcion para despachar objeto{type, payload}
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector(state => state.myFavorites)

   const handleFavorite = () => {
      //apretar el corazonbtn modifica el estado local isFav y ademas despacha action para avisar al store
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(props.id)) //la func remove espera arg id
      }
      if (!isFav) {
         setIsFav(true)
         dispatch(addFav(props)) //la func addFav espera character(obj con todo el pers), que está en props de card
      }
   }
   // al montarse Favoritos, que revise el estado global de myFavorites para no perder todos los fav al salir y para no repetir
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) { //comparo estado global con nuevo, setear en true fav para mostrar
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <span
         className={style.container}
      >
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )

         }
         <button onClick={() => { props.onClose(props.id) }}>X</button>
         <div>
            <h3>{props.name}</h3>
            <h4>ID: {props.id}</h4>
            <h4>Status: {props.status}</h4>
            <h4>Species: {props.species}</h4>
            <h4>Gender: {props.gender}</h4>
            <h4>Origin: {props.origin}</h4>
         </div>

         <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt={props.name} />
         </Link>
      </span>
   );
}

// origin solo, porque en app mandan asi el origin.name
// no dejar el boton dentro del link, chocan las funciones
export default Card;