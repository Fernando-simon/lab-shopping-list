
import { useEffect, useState } from "react";
import './Form.css';

const Form = props => {
    const [form, setForm] = useState([]);
    const [pets, setPets] = useState({});
    const [selectedPet, setSelectedPet] = useState();

    useEffect(() => {
        const pet = JSON.parse(localStorage.getItem('selectedPet'));
        const lista = localStorage.getItem('pets') ? JSON.parse(localStorage.getItem('pets')) : [];
        setForm(lista)
        if (pet) {

            setSelectedPet(pet);
            setPets(pet);
        }
        
    }, []);

    const handleChange = event => {
        setPets({
            ...pets,
            [event.target.name]: event.target.value
        })
    }

    const handleCastrado = event => {
        setPets({
            ...pets,
            castrado: event.target.checked ? true : false
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        let array = [];
        const formData = pets;
        if (!('castrado' in pets)) {
            formData.castrado = false;
        }
        if (selectedPet) {
            const updatedPets = form.map(pet => {
                if (JSON.stringify(pet) === JSON.stringify(selectedPet)) {
                    return formData;
                }
                else {

                    return pet;
                }
            });
            array = updatedPets
        } else {
            array = [...form, formData];
        }

        localStorage.removeItem('selectedPet');
        localStorage.setItem('pets', JSON.stringify(array));
        props.upDatePets(array);

        props.upDateAberto(false);
    }

    const removePet = selectedPet => {
        const petIndex = pets.findIndex(pets => JSON.stringify(pets) === JSON.stringify(selectedPet));

        pets.splice(petIndex, 1);
        console.log(pets);
        localStorage.setItem('pets', JSON.stringify(pets));
        props.upDatePets(pets);
        props.upDateAberto(false);

        localStorage.removeItem('selectedPets');
    }

    const handeleCancel = () => {
        props.upDateAberto(false);

    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <div className="form-row">
                <label>
                    Nome <br />
                    <input type="text" name="nome"
                        onChange={event => handleChange(event)} value={pets.nome} required />
                </label>
            </div>

            <div className="form-row">
                <label>
                    Idade <br />
                    <input type="number" name="idade"
                        onChange={event => handleChange(event)} value={pets.idade} required />
                </label>
            </div>

            <div className="form-row">
                <label>
                    Espécie <br />
                    <input type="text" name="especie"
                        onChange={event => handleChange(event)} value={pets.especie} required />
                </label>
            </div>

            <div className="form-row">
                <label>
                    Raça <br />
                    <input type="text" name="raca"
                        onChange={event => handleChange(event)} value={pets.raca} required />
                </label>
            </div>

            <div className="form-row">
                <label>
                    Castrado <br />
                    <input type="checkbox" name="castrado" onChange={event => handleCastrado(event)} checked={form.castrado} />

                </label>
            </div>
            <div />

            <button type="submit" className="btn">{selectedPet ? 'editar' : 'adcionar'}</button>
            {selectedPet ? <button onClick={event => { event.preventDefault(); removePet(selectedPet); }} className="btn">Excluir</button> : <></>}
            <button className="btn" onClick={() => { handeleCancel() }}>
                Cancelar
            </button>
        </form>
    )

}

export default Form;