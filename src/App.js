
import {useState, useEffect} from "react";
import Form from "./components/Form/Form";
function App(){
  
  const [pets, setPets] = useState([]);
  const [aberto, setAberto] = useState(false);



  const upDatePets = value => {
    setPets(value);
  }

  const upDateAberto = value => {
    setAberto(value);
  }

  useEffect(() => {
    const data = localStorage.getItem('pets') ? JSON.parse(localStorage.getItem('pets')) : [];
    setPets(data);
  
  },[])
  const handleClick = () => {
    
    setAberto(true);
  };

  return (
    <div>
       {!aberto && (
        <button className="btn" onClick={handleClick}>
          Adicionar pets!
        </button>
      )}


{ aberto && <Form
          upDateAberto={upDateAberto}
          upDatePets={upDatePets}
          pets={pets}
        
        /> }
    </div>
  );
}

export default App;
