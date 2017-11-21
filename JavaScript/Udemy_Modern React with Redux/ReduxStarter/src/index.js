import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyDwa2mgGqHl_KPPWhXN8W-p38vuaz5c3L4";

YTSearch({key: API_KEY, term: "pokemon"}, data => {
    console.log(data);
});


class App extends Component {
    render () {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
};


ReactDOM.render(<App/>, document.querySelector(".container"));