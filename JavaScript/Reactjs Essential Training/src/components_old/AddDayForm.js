import { PropTypes} from "react";

export const AddDayForm = ({resort, date, powder, backCountry, onNewDay}) => {

    let _resort, _date, _powder, _backcountry;

    const submit = (e) => {
        e.preventDefault();
        onNewDay({
            resort: _resort.value,
            date: _date.value,
            powder: _powder.checked,
            backcountry: _backcountry.checked
        });
        _resort.value = '';
        _date.value = '';
        _powder.checked = false;
        _backcountry.checked = false;
    };

    return (
        <form onSubmit={submit} className="add-day">
            <label htmlFor="resort">Resort Name</label>
            <input type="text"
                   id="resort"
                   defaultValue={resort}
                   ref={input => _resort = input}
                   required/>

            <label htmlFor="date">Date</label>
            <input type="date"
                   id="date"
                   defaultValue={date}
                   ref={input => _date = input}
                   required/>

            <div>
                <input
                    type="checkbox"
                    id="powder"
                    defaultChecked={powder}
                    ref={input => _powder = input}/>
                <label htmlFor="powder">Powder Day</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="backcountry"
                    defaultChecked={backCountry}
                    ref={input => _backcountry = input}/>
                <label htmlFor="backcountry">Backcountry Day</label>
            </div>
            <button>Add Day</button>
        </form>
    )
};

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