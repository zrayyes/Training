export const SelectedItem = ({movie}) => {
    return (
        <div id="selected-movie">
            <h1>{movie.title}</h1>
            <div className="row">

                <div className="col-md-4">
                    <img src={movie.poster.large} className="img-fluid"/>
                </div>

                <div className="col-md-8">
                    <h2>{movie.year}</h2>
                    <h4>{movie.genre}</h4>
                    <p>{movie.description}</p>
                </div>

            </div>
        </div>
    )
};