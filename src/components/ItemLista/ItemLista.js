
const ItemLista = props => {
    const {produto} = props;

    const selectedProduto = produto => {
        localStorage.setItem('selectedProduto', JSON.stringify(produto));
}

const handleForm = () => {
    props.upDateAberto(true);
    props.upDateShowLista(false);
    }

    return(
        <div className="item-lista">
            <div>{produto.nome}</div>
        <div>
        <button onClick={() => {selectedProduto(pet);handleForm()}}>Info</button>
        </div>
        </div>
    )
}

export default ItemLista;