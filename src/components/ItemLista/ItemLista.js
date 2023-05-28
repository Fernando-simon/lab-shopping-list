
const ItemLista = props => {
    const {pet} = props;

    const selectedPet = pet => {
        localStorage.setItem('selectedPet', JSON.stringify(pet));
}

const handleForm = () => {
    props.upDateAberto(true);
    props.upDateShowLista(false);
    }

    return(
        <div className="item-lista">
            <div>{pet.nome}</div>
        <div>
        <button onClick={() => {selectedPet(pet);handleForm()}}>Info</button>
        </div>
        </div>
    )
}

export default ItemLista;