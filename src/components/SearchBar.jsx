import { useState } from "react";

export default function SearchBar({ onSearch, onRandomSearch }) {

   const [id, setId] = useState("");

   function handleChange(event) {
      setId(event.target.value)
   }

   // borrar input al hacer click
   //dos eventos en uno solo, ejecturo el onsearch y vacio el id que esta asociado al id
   function handleClick(event) {
      event.preventDefault();
      onSearch(id);
      setId("");
   }

   function handleRandom() {
      //hacer con el onsearch randon number
   }

   return (
      <div>

         <input type='search' onChange={handleChange} value={id} />
         <button onClick={handleClick}> Add a character </button>
         <button onClick={onRandomSearch}>Add a random Character</button>


      </div>
   );
}
