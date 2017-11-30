import React from "react";
import { render } from "react-dom";
import './stylesheets/style.css';

import {Pokemon} from "./components/Pokemon";

window.React = React;

render(
    <div>
        <Pokemon>Loading...</Pokemon>
    </div>,
    document.getElementById('react-container')
);