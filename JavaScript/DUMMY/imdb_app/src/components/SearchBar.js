import {Component} from "react";

export class SearchBar extends Component {

    onKeyPress(e) {
        if(e.key === 'Enter'){
            console.log('enter press here! ')
        }
    };

    render(){
        return (
            <div id="search-bar">
              <input type="text" name="search" onKeyPress={this.onKeyPress}/>
            </div>
        )
    }
}

// fetch('https://theimdbapi.org/api/find/movie?title=transformers&year=2007')
//     .then((response) => response.json())
//     .then((responseJson) => {
//         console.log(responseJson);
//     })
//     .catch((error) => {
//         console.error(error);
//     });