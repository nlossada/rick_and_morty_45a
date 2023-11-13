export default function SearchBar({ onSearch }) {
   // props recibe una prop de {funcion dentro}, hago destructuring o uso props.onSearch
   return (
      <div>

         <input type='search' />
         <button onClick={onSearch}> Agregar </button>

      </div>
   );
}
