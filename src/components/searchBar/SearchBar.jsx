import { useState } from "react";

export default function SearchBar({ onSearch }) {

  const [id, setId] = useState("")

  const handleChange = (event) => {
    setId(event.target.value);
    
  }

  const handleSearch = (id) => {
    onSearch(id)
    setId("")
  }

  return (
    <div> 
      <input type='search' value= {id} placeholder= "Ingresa un ID por favor" onChange = {handleChange} />
      <br />
      <button onClick={() => handleSearch(id)}>Agregar Personaje</button>
    </div>
  );
}