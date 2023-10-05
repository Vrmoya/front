import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import axios from "axios"

function App() {
   const[characters, setCharacters] = useState([]);

   const onSearch = (id) => {
    const exists = characters.find(char => char.id === Number(id));

     if(exists) {
       window.alert('El personaje ya existe');
       return; 
     }
    if (id === 'random') {
      // Fetch random character
      const randomId = Math.floor(Math.random() * 826 + 1);

      axios(`https://rym2.up.railway.app/api/character/${randomId}?key=pi-vrmoya`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 
         });
   }

           // setCharacters([...characters, example]) 
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-vrmoya`)
    .then(({data}) => {
      if(data.name){
        setCharacters(oldCharacters => [...oldCharacters, data])
      } else { if(id > 827)
        window.alert("Personaje no encontrado")

      }
    }).catch(error => console.log(error))
     }
    
     const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== Number(id)))
     }
     
     const addRandomCharacter = () => {
      const character = getRandomCharacter();
      setCharacters(prev => [...prev, character]);
    }

   return (
      <div className='App'>
      <Nav onSearch={onSearch} addRandom = {addRandomCharacter} />
      <hr />
      <Cards characters={characters} onClose={onClose} />
      <hr />
     
    </div>
   );
}

export default App;
