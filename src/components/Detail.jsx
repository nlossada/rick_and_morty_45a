import axios from "axios";
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";

function Detail(props) {
    const { id } = useParams(); //traigo solo el params.id con destructuring

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(
                ({ data }) => {
                    if (data.name) {
                        setCharacter(data);
                    } else {
                        window.alert('No hay personajes con ese ID');
                    }
                }
            );
        return setCharacter({});
    }, [id]);



    return (
        <div>
            <h1>Detail</h1>
            <hr />

            <h3>{character.name}</h3>
            <h4>Status: {character.status}</h4>
            <h4>Specie: {character.species}</h4>
            <h4>Gender: {character.gender}</h4>
            <h4>Origin: {character.origin?.name}</h4>
            <h4>Location: {character.location?.name}</h4>
            <img src={character.image} alt={character.name} />
        </div>
    )
}

// {character.origin?.name} ternario, solo si existe obj origin buscar el name
export default Detail;