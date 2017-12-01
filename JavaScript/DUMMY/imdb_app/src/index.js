import React,{Component} from "react";
import { render } from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./stylesheets/style.css";

import {SearchBar} from "./components/SearchBar";
import {ResultsList} from "./components/ResultsList"
import {SelectedItem} from "./components/SelectedItem"

window.React = React;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: null,
            selectedMovie: null
        };

        this.searchMovies = this.searchMovies.bind(this);
    }

    searchMovies(term){
        fetch(`https://theimdbapi.org/api/find/movie?title=${term}`)
            .then((response) => response.json())
            .then((movies) => {
                if(movies.length) {
                    this.setState({
                        movies: movies,
                        selectedMovie: movies[0]
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(){
        return(
            <div className="container">
                <SearchBar onSearch={this.searchMovies}/>

                {(this.state.movies) ?
                    <ResultsList
                        movies={this.state.movies}
                        onMovieSelect={(movie)=>this.setState({selectedMovie: movie})}
                    /> :
                    null}

                {(this.state.selectedMovie) ?
                    <SelectedItem
                        movie={this.state.selectedMovie}
                    /> :
                    null}
            </div>
        );
    }

}




render(<App/>,document.getElementById('react-container'));