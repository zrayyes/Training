import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyDwa2mgGqHl_KPPWhXN8W-p38vuaz5c3L4";

YTSearch({key: API_KEY, term: "pokemon"}, data => {
    console.log(data);
});

// Create a  new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component"s HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector(".container"));