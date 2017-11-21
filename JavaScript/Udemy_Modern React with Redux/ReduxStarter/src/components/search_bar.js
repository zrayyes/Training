import React, {Component} from "react";
// same as using: const Component = React.Component;

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = {term:""};
    }

    render() {
        return (
            <div>
                <input type="text" onChange={event => this.setState({ term: event.target.value })} />
                <p>Value of the input: {this.state.term}</p>
            </div>
        )
    }
}

export default SearchBar;