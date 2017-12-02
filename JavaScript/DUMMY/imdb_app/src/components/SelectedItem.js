export const SelectedItem = ({movie}) => {
    return (
        <div className="card">
            <h1>{movie.title}</h1>
            <div className="row card-block">

                <div className="col-md-4">
                    <img src={movie.poster.large} className="img-fluid"/>
                </div>

                <div className="col-md-8">
                    <h2>{movie.year}</h2>
                    <p>{movie.storyline}</p>
                </div>

            </div>
        </div>
    )
};