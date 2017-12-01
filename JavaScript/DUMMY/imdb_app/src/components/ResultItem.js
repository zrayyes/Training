export const ResultItem = ({movie,onMovieSelect}) => {

    return (
        <li className="list-group-item"
            onClick={() => {onMovieSelect(movie)}}
            key={movie.imdb_id}>
            {movie.title}
        </li>
    )
};