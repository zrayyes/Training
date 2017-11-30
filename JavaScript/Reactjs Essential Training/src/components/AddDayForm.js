import { PropTypes, Component } from "react";

export class AddDayForm extends Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        console.log('resort', this.refs.resort.value);
        console.log('date', this.refs.date.value);
        console.log('powder', this.refs.powder.value);
        console.log('backcountry', this.refs.backcountry.value);
    }

    render(){

        const {resort, date, powder, backCountry} = this.props;

        return (
            <form onSubmit={this.submit} className="add-day">
                <label htmlFor="resort">Resort Name</label>
                <input type="text"
                       id="resort"
                       defaultValue={resort}
                       ref="resort"
                       required/>

                <label htmlFor="date">Date</label>
                <input type="date"
                       id="date"
                       defaultValue={date}
                       ref="date"
                       required/>

                <div>
                    <input
                        type="checkbox"
                        id="powder"
                        defaultChecked={powder}
                        ref="powder"
                        required/>
                    <label htmlFor="powder">Powder Day</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="backcountry"
                        defaultChecked={backCountry}
                        ref="backcountry"
                        required/>
                    <label htmlFor="backcountry">Backcountry Day</label>
                </div>
                <button>Add Day</button>
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