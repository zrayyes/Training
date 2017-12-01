import React from "react";
import { render } from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./stylesheets/style.css";

import {SearchBar} from "./components/SearchBar";

window.React = React;

function searchMovies(term){
    fetch('https://theimdbapi.org/api/find/movie?title=transformers&year=2007')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
}

render(
    <div className="container">
        <SearchBar onSearch={searchMovies}/>
    </div>,
    document.getElementById('react-container')
);