export const ResultItem = ({movie,onMovieSelect}) => {

    return (
        <li className="list-group-item"
            onClick={() => {onMovieSelect(movie);window.scrollTo(0, 0)}}
            key={movie.imdb_id}>
            {movie.title} | {movie.year}
        </li>
    )
};