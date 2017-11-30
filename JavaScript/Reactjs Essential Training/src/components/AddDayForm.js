import { PropTypes, Component } from "react";

export class AddDayForm extends Component {

    render(){

        const {resort, date, powder, backCountry} = this.props;

        return (
            <form className="add-day">
                <label htmlFor="resort">Resort Name</label>
                <input type="text"
                       id="resort"
                       defaultValue={resort}
                       required/>

                <label htmlFor="date">Date</label>
                <input type="date"
                       id="date"
                       defaultValue={date}
                       required/>

                <div>
                    <input
                        type="checkbox"
                        id="powder"
                        defaultChecked={powder}
                        required/>
                    <label htmlFor="powder">Powder Day</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="backcountry"
                        defaultChecked={backCountry}
                        required/>
                    <label htmlFor="backcountry">Backcountry Day</label>
                </div>

            </form>
        )
    };
}

AddDayForm.defaultProps = {
    resort: "Kirkwood",
    date: "2016-03-28",
    powder: true,
    backcountry: false
};

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
};