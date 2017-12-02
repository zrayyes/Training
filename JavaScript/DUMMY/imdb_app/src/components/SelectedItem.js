export const SelectedItem = ({movie}) => {
    return (
        <div id="selected-movie">
            <h1>{movie.title}</h1>
            <img src={movie.poster.large} className="img-fluid"/>
            <h2>{movie.year}</h2>
            <h4>{movie.genre}</h4>
            <p>{movie.description}</p>
        </div>
    )
};