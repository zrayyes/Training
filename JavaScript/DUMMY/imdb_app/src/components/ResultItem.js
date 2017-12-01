export const ResultItem = ({movie}) => {

    return (
        <li key={movie.imdb_id}>
            {movie.title}
        </li>
    )
};