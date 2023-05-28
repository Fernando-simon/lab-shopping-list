import './Lista.css';

import ItemLista from "./ItemLista.js";
import { useEffect, useState } from 'react';


const Lista = props => {

    const [pets, setPets] = useState([]);
    const [castrado, setCastrado] = useState(false);
    const [selectedPets, setSelectedPets] = useState([])

    useEffect(() => {
      const data = localStorage.getItem('pets') ? JSON.parse(localStorage.getItem('pets')) : null;
            setPets(data);
            setSelectedPets(data);
        }, []);
        
    const handleFiltro = () => {
        const selected =  pets.filter(pet => pet.castrado === castrado);
        setSelectedPets(selected);
    }

    const limpaFiltro = () => {
        setCastrado(false);
        setSelectedPets(pets);
    }

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <b>Filtro</b> <br/>
                <label>
                    Castrado
                    <input type="checkbox"name="castrado"
                    onChange={event => setCastrado(!castrado)} checked={castrado}/>
                    </label>
                    <br/>
                    <button onClick={handleFiltro}>Filtrar</button>
                    <button onClick={limpaFiltro}>Limpar</button>
                    </form>
    {selectedPets && selectedPets.map(pet => 
       <ItemLista pet={pet} pets={pets} id={pet.ItemLista} />)}
    </div>
    
    );

    }


    

export default Lista;