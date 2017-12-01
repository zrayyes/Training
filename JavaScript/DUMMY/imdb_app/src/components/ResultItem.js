export const ResultItem = ({movie,onMovieSelect}) => {

    return (
        <li
            onClick={() => {onMovieSelect(movie)}}
            key={movie.imdb_id}>
            {movie.title}
        </li>
    )
};