import './Lista.css';

import ItemLista from "./ItemLista.js";
import { useEffect, useState } from 'react';


const Lista = props => {

    const [pets, setProduto] = useState([]);
    const [comprado, setComprado] = useState(false);
    const [selectedPruduto, setSelectedProduto] = useState([])

    useEffect(() => {
      const data = localStorage.getItem('produto') ? JSON.parse(localStorage.getItem('produto')) : null;
            setProduto(data);
            setSelectedProduto(data);
        }, []);
        
    const handleFiltro = () => {
        const selected =  produto.filter(produto => produto.comprado === comprado);
        setSelectedComprado(selected);
    }

    const limpaFiltro = () => {
        setCastrado(false);
        setSelectedPets(produto);
    }

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <b>Filtro</b> <br/>
                <label>
                    Comprado
                    <input type="checkbox"name="comprado"
                    onChange={event => setCastrado(!comprado)} checked={comprado}/>
                    </label>
                    <br/>
                    <button onClick={handleFiltro}>Filtrar</button>
                    <button onClick={limpaFiltro}>Limpar</button>
                    </form>
    {selectedProduto && selectedProduto.map(produto => 
       <ItemLista produto={produto} produtos={produtos} id={produto.ItemLista} />)}
    </div>
    
    );

    }


    

export default Lista;