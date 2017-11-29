import React from "react";
import { render } from "react-dom";

import {SkiDayCount} from "./components/SkiDayCount";

// Adds react to window to avoid React is undefined
window.React = React;

render(
    <SkiDayCount
        total={50}
        powder={20}
        backcountry={10}
        goal={100}/>,
    document.getElementById('react-container')
);