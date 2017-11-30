import React from "react";
import { render } from "react-dom";


fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((response) => response.json())
    .then((responseJson) => {
        render(
            <h1>
                {responseJson.name}
            </h1>,
            document.getElementById('react-container')
        );
    })
    .catch((error) => {
        console.error(error);
    });