import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate} from "react-router-dom"
import axios from "axios"

import About from './components/about/About.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import Form from './components/form/Form.jsx';
import Nav from './components/nav/Nav';

import './App.css';



function App() {
  const navigate = useNavigate(); 
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const[characters, setCharacters] = useState([]);
  const EMAIL = 'mail@mail.com';
  const PASSWORD = 'hola123';
  

  function login(userData) {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    if(!access) {
      navigate('/');
    }
  }, [access]); 




 
 

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
      } else { if(id > 826)
        window.alert("Personaje no encontrado")

      }
    }).catch(error => console.log(error))
     }
    
     const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== Number(id)))
     }
     
     

   return (
      <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      
      <Routes>
        <Route path='/' element={<Form login={login}/>}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/detail/:id" element ={<Detail/>}/>
        
        <Route path='*' element={<Error />} />
      </Routes>
     
    </div>
   );
}

export default App;
