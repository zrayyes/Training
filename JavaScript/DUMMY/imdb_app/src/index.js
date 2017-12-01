import React,{Component} from "react";
import { render } from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./stylesheets/style.css";

import {SearchBar} from "./components/SearchBar";

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
                {(this.state.movies) ? <h1>{this.state.movies[0].title}</h1>: null}
            </div>
        );
    }

}




render(<App/>,document.getElementById('react-container'));