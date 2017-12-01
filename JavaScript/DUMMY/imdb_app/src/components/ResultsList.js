export const ResultsList = ({movies}) => {

    const showMovies = movies.map((item) => {
        return (
            <li key={item.title+item.year}>
                {item.title} | {item.year}
            </li>
        );
    });

    return (
        <div>
            <ul>
                {showMovies}
            </ul>
        </div>
    )
};