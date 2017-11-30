import { PropTypes, Component } from "react";

export class AddDayForm extends Component {
    render(){
        return (
            <form className="add-day-form">
                <input type="text" id="resort" required/>
                <input type="date" id="date" required/>
                <input type="checkbox" id="powder" required/>
                <input type="checkbox" id="backcountry" required/>
            </form>
        )
    };
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
};