import {ResultItem} from "./ResultItem";

export const ResultsList = ({movies}) => {

    const showMovies = movies.map((movie) => {
        return (<ResultItem key={movie.imdb_id} movie={movie}/>);
    });

    return (
        <div>
            <ul>
                {showMovies}
            </ul>
        </div>
    )
};