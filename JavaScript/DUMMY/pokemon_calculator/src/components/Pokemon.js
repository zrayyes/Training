import {Component} from "react";




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
                    <h1>
                        {this.state.pokemon.name}
                    </h1>
                    : "Loading..."}
            </div>

        );
    }
}

