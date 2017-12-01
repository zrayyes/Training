import React from "react";
import { render } from "react-dom";

fetch('https://theimdbapi.org/api/find/movie?title=transformers&year=2007')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
    })
    .catch((error) => {
        console.error(error);
    });

render(
    <h1>
        Hello World
    </h1>,
    document.getElementById('react-container')
);