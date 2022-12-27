import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './Components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);/*Aqui se crea el estado characters que es un array de objetos con los personajes de la api de Rick & Morty*/

  const requestApi = async () => { 
    const api = await fetch('https://rickandmortyapi.com/api/character');/*Aqui se hace la peticion a la api de Rick & Morty*/
    const characterApi = await api.json();/*Aqui se convierte la respuesta de la api a un objeto de javascript*/

    setCharacters(characterApi.results);//results es un array de objetos con los personajes de la api de Rick & Morty
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
         {characters ? (
          <Characters characters = {characters} setCharacters = {setCharacters}/>/*Aqui se renderiza el componente Characters que se encuentra en src\Components\Characters.js y que se importa en esta linea*/
         ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
            <button onClick={requestApi} className="btn-search">
              Search Characters
            </button>
         </>
        )}
         
        
      </header>
    </div>
  );
}

export default App;
