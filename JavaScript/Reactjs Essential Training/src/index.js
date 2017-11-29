import React from "react";
import { render } from "react-dom";

import {SkiDayCount} from "./components/SkiDayCount";

// Adds react to window to avoid React is undefined
window.React = React;

render(
    <SkiDayCount/>,
    document.getElementById('react-container')
);