
import { useEffect, useState } from "react";
import './Form.css';

const Form = props => {
    const [form, setForm] = useState([]);
    const [produto, setProduto] = useState({});
    const [selectedProduto, setSelectedProduto] = useState();

    useEffect(() => {
        const produto = JSON.parse(localStorage.getItem('selectedProduto'));
        const lista = localStorage.getItem('produto') ? JSON.parse(localStorage.getItem('produto')) : [];
        setForm(lista)
        if (produto) {

            setSelectedProduto(produto);
            setProduto(produto);
        }
        
    }, []);

    const handleChange = event => {
        setProduto({
            ...produto,
            [event.target.name]: event.target.value
        })
    }

    const handleComprado = event => {
        setProduto({
            ...produto,
            comprado: event.target.checked ? true : false
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        let array = [];
        const formData = produto;
        if (!('comprado' in produto)) {
            formData.comprado = false;
        }
        if (selectedProduto) {
            const updatedProduto = form.map(produto => {
                if (JSON.stringify(produto) === JSON.stringify(selectedProduto)) {
                    return formData;
                }
                else {

                    return produto;
                }
            });
            array = updatedProduto
        } else {
            array = [...form, formData];
        }

        localStorage.removeItem('selectedProduto');
        localStorage.setItem('produtos', JSON.stringify(array));
        props.upDateProduto(array);

        props.upDateAberto(false);
    }

    const removeProduto = selectedProduto => {
        const produtoIndex = produto.findIndex(produto => JSON.stringify(produto) === JSON.stringify(selectedProduto));

        produto.splice(produtoIndex, 1);
        console.log(produto);
        localStorage.setItem('produto', JSON.stringify(produto));
        props.upDateProduto(produto);
        props.upDateAberto(false);

        localStorage.removeItem('selectedProduto');
    }

    const handeleCancel = () => {
        props.upDateAberto(false);

    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <div className="form-row">
                <label>
                    Nome do produto <br />
                    <input type="text" name="nome do produto"
                        onChange={event => handleChange(event)} value={produto.nome} required />
                </label>
            </div>

            <div className="form-row">
                <label>
                    Quantidade  <br />
                    <input type="number" name="Quantidade"
                        onChange={event => handleChange(event)} value={produto.quantidade} required />
                </label>
            </div>

            <div className="form-row">
                <label>
                    Novo produto <br />
                    <input type="text" name="novo produto"
                        onChange={event => handleChange(event)} value={produto.novo} required />
                </label>
            </div>

            <div className="form-row">
                <label>
                    Produtos inseridos <br />
                    <input type="text" name="Produtos inseridos"
                        onChange={event => handleChange(event)} value={produto.inseridos} required />
                </label>
            </div>

            <div className="form-row">
                <label>
                    Comprado <br />
                    <input type="checkbox" name="comprado" onChange={event => handleComprado(event)} checked={form.handleComprado} />

                </label>
            </div>
            <div />

            <button type="submit" className="btn">{selectedProduto ? 'editar' : 'adcionar'}</button>
            {selectedProduto ? <button onClick={event => { event.preventDefault(); removeProduto(selectedProduto); }} className="btn">Excluir produto</button> : <></>}
            <button className="btn" onClick={() => { handeleCancel() }}>
                Excluir produto!
            </button>
        </form>
    )

}

export default Form;