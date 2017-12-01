import {ResultItem} from "./ResultItem";

export const ResultsList = ({movies,onMovieSelect}) => {

    const showMovies = movies.map((movie) => {
        return (
            <ResultItem
                key={movie.imdb_id}
                movie={movie}
                onMovieSelect={onMovieSelect}
            />
        );
    });

    return (
        <div id="movie-list">
            <ul className="list-group">
                {showMovies}
            </ul>
        </div>
    )
};