import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import style from "./Detail.module.css"

function Detail(props) {
    const { id } = useParams(); //traigo solo el params.id con destructuring

    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    //server local:"http://localhost:3001/rickandmorty/character/${id}". solo anda del id 1 al 5!
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
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

    function onClick(event) {
        navigate("/home")
    }


    return (
        <div>
            <div className={style.container}>

                <img src={character.image} alt={character.name} />
                <div>
                    <h1>Detail</h1>
                    <hr />
                    <h3>{character.name}</h3>
                    <h4>📰 Id: {character.id} </h4>
                    {
                        (character.status === "Alive") ? <h4> 🟢 Status: {character.status} </h4> : <h4> 🔴 Status: {character.status}  </h4>
                    }
                    <h4> 𖠋 Specie: {character.species}</h4>
                    <h4> ⚥ Gender: {character.gender}</h4>
                    <h4> ⟟ Origin: {character.origin?.name}</h4>
                    <h4> ⟟ Location: {character.location?.name}</h4>
                </div>
            </div>
            <button onClick={onClick}> ⬅️ GO HOME! </button>
        </div>
    )
}

// {character.origin?.name} ternario, solo si existe obj origin buscar el name
export default Detail;