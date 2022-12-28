export default function Characters(props) {
  const { characters, setCharacters } = props;/*Aqui se desestructura el objeto props que contiene el estado characters y la funcion setCharacters que se envia desde src\App.js*/

  const resetCharacters = () => {/*Aqui se crea la funcion resetCharacters que se ejecuta cuando se hace click en el span con la clase back-home*/
    setCharacters(null);/*Aqui se ejecuta la funcion setCharacters que se envia desde src\App.js y que se ejecuta para cambiar el estado characters a null*/
  }

  return ( 
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharacters}>
            Volver a la home
        </span>
        <div className="container-characters">
            {characters.map((character,index) => (/*Aqui se renderiza el array de objetos characters que se envia desde src\App.js*/
                 <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name} className="img-character"/>
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === "Alive" ? (
                                <>
                                <span className="alive"/>
                                Alive
                                </>
                            ) : (
                                <>
                                <span className="dead"/>
                                Dead
                                </>
                            )}
                        </h6>
                        <p>
                            <span className="text-grey">Episodes: </span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Species: </span>
                            <span>{character.species}</span>
                        </p>
                    </div>     
                </div>    
            ))}
        </div>
        <span className="back-home" onClick={ resetCharacters } >
            Volver a la home
        </span>
        <br/>
        <br/>
        <br/>
        <footer>
            <h6>Developed by <a href="https://www.instagram.com/giancarloap96/" target="_blank" rel="noreferrer">Giancarlo Arias</a></h6>
        </footer>
    </div>
  );
}