import React,{Component} from "react";
import { render } from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./stylesheets/style.css";

import {SearchBar} from "./components/SearchBar";
import {ResultsList} from "./components/ResultsList"

window.React = React;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: null
        };

        this.searchMovies = this.searchMovies.bind(this);
    }

    searchMovies(term){
        fetch(`https://theimdbapi.org/api/find/movie?title=${term}`)
            .then((response) => response.json())
            .then((movies) => {
                this.setState({movies});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(){
        return(
            <div className="container">
                <SearchBar onSearch={this.searchMovies}/>
                {(this.state.movies) ? <ResultsList movies={this.state.movies}/> : null}
            </div>
        );
    }

}




render(<App/>,document.getElementById('react-container'));