import { useState } from "react";

export default function SearchBar({onSearch}) {
   let [id, setId] = useState("")
   function  handleChange(event){
      return setId(event.target.value) 
   } 

   return (
      <div>
          <input type='search'onChange={handleChange}/>
         <button onClick={()=>{onSearch(id)}}>Agregar</button> 
         <button onClick={()=>onSearch(Math.floor(Math.random()*826))}>Personaje Random</button>
      </div>
   );
}
