import React from 'react';
import ReactDOM from 'react-dom';

// Create a  new component. This component should produce some HTML
const App = function () {
    return <div>Hi!</div>;
};

// Take this component's HTML and put it on the page (in the DOM)
ReactDOM.render(App);