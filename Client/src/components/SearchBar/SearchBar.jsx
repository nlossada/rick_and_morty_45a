import { useState } from "react";
import style from "./SearchBar.module.css"

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

   return (
      <div className={style.containerDiv}>

         <input className={style.inputSearch} type='search' onChange={handleChange} value={id} placeholder="Insert an Id" />
         <button onClick={handleClick}> Add by id </button>
         <button onClick={onRandomSearch}>Add any character</button>


      </div>
   );
}
