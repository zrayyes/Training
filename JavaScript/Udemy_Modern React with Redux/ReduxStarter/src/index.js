import React from "react";
import ReactDOM from "react-dom";

const API_KEY = "AIzaSyDwa2mgGqHl_KPPWhXN8W-p38vuaz5c3L4";

// Create a  new component. This component should produce some HTML
const App = () => {
    return <div>Hi!</div>;
};

// Take this component"s HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector(".container"));