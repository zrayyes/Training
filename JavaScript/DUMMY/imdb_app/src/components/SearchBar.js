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
            <div >

                <input type="text"
                       name="search"
                       className="form-control"
                       onKeyPress={this.onKeyPress}
                       placeholder="Search"/>

            </div>
        )
    }
}

