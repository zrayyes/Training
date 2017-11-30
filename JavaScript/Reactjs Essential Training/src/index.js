import React from "react";
import { render } from "react-dom";

import {App} from "./components/app";
import {SkiDayCount} from "./components/SkiDayCount";


// Adds react to window to avoid React is undefined
window.React = React;

render(
    <App />,
    document.getElementById('react-container')
);

