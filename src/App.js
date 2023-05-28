
import {useState, useEffect} from "react";
import Form from "./components/Form/Form";
function App(){
  
  const [produto, setProduto] = useState([]);
  const [aberto, setAberto] = useState(false);



  const upDateProduto = value => {
    setProduto(value);
  }

  const upDateAberto = value => {
    setAberto(value);
  }

  useEffect(() => {
    const data = localStorage.getItem('produto') ? JSON.parse(localStorage.getItem('produto')) : [];
    setProduto(data);
  
  },[])
  const handleClick = () => {
    
    setAberto(true);
  };

  return (
    <div>
       {!aberto && (
        <button className="btn" onClick={handleClick}>
          Adicionar produtos!
        </button>
      )}


{ aberto && <Form
          upDateAberto={upDateAberto}
          upDateProduto={upDateProduto}
          produto={setProduto}
        
        /> }
    </div>
  );
}

export default App;
