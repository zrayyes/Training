import React, {Component} from "react";
// same as using: const Component = React.Component;

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = {term:""};
    }

    render() {
        return (<input type="text" onChange={event => console.log(event.target.value)}/>)
    }
}

export default SearchBar;