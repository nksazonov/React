import React from "react";

const MovieItem = props => {
    const {movie, removeMovie, addMovieToWatch} = props;
    return (
        <div className="card">
            <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                    movie.poster_path}`}
                alt=""
            />
            <div className="card-body">
                <h6 className="card-title">{movie.title}</h6>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">Rating: {movie.vote_average}</p>
                    <button
                        type="button"
                        className="btn bnt-secondary"
                        onClick={addMovieToWatch.bind(null, movie)}>
                        Will watch
                    </button>
                </div>
            <button type="button" onClick={removeMovie.bind(null, movie)}>
                Delete movie
            </button>
            </div>
        </div>
    );
}

export default MovieItem;