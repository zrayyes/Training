import {Component} from "react";
import {PokemonDetail} from "./PokemonDetail";


export class Pokemon extends Component {

    constructor(props){
        super(props);

        this.state = {
            pokemon: null
        };

        this.getPokemonById(1);
    }

    getPokemonById(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    pokemon: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(){
        return (
            <div>
                {(this.state.pokemon) ?
                    <PokemonDetail pokemon={this.state.pokemon}/>
                    : "Loading..."}
            </div>

        );
    }
}

