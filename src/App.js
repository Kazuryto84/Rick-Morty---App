import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate, } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Cards/Detail/Detail';
import Form from './components/Form.jsx/Form';
import Favorites from './components/Favorites/Favorites';


function App() {
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate("/");
   }, [access]); 

   const username = "hurtadodiego@gmail.com";
   const password = "mipass123";

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
         if (characters.find(Element => Element.id === data.id)) 
            window.alert("El personaje ya existe") 
         else  
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
    

   };

   function onClose(id){
      setCharacters(characters.filter((char) => char.id !== id ))
   };

   const login = (userData) => {
      if (userData.username === username && userData.password === password){
         setAccess(true);
         navigate("/home");
      } else {
         alert("Credenciales no coinciden");
      }
   };
 
   return (
      <div className='App'>
         {pathname !== "/" && <NavBar onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form Login={login}/>} />
            <Route path='/' element={<Cards characters={characters}/>} />
            <Route path='/home' element={<Cards characters={characters}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/detail/:id' element={<Detail />} />
         
         </Routes>

      </div>
   );
}

export default App;
