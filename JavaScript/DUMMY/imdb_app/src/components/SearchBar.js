import {Component} from "react";

export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.onKeyPress= this.onKeyPress.bind(this);
    }

    onKeyPress(e) {
        if(e.key === 'Enter'){
            this.props.onSearch(e.target.value);
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

