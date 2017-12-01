import React from "react";
import { render } from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./stylesheets/style.css";

import {SearchBar} from "./components/SearchBar";

window.React = React;


render(
    <div className="container">
        <SearchBar/>
    </div>,
    document.getElementById('react-container')
);