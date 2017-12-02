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
            <div>
                <div className="container">
                    <br/>
                    <div className="jumbotron text-center">
                        <h1>IMDB Movie Search</h1>
                    </div>
                    <SearchBar onSearch={this.searchMovies}/>
                    <br/>
                    <div className="row">
                        <div className="col-md-4" >
                            {(this.state.movies) ?
                                <ResultsList
                                    movies={this.state.movies}
                                    onMovieSelect={(movie)=>this.setState({selectedMovie: movie})}
                                /> :
                                null}
                        </div>
                        <div className="col-md-8" >
                            {(this.state.selectedMovie) ?
                                <SelectedItem
                                    movie={this.state.selectedMovie}
                                /> :
                                null}
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        );
    }

}




render(<App/>,document.getElementById('react-container'));