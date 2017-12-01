export const ResultsList = ({movies}) => {

    const showMovies = (movieList) => {
        return movieList.map((item) => {
            return (<li key={item.title+item.year}>{item.title} | {item.year}</li>);
        });
    };

    return (
        <div>
            <ul>
                {showMovies(movies)}
            </ul>
        </div>
    )
};