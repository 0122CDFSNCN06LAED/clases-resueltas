import { Component } from "react";

class MoviesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            page: 0,
            hasPrevPage: false,
            hasNextPage: false,
        };
    }

    async updateMovies() {
        const response = await fetch(
            `http://localhost:3001/api/movies?page=${this.state.page}`
        );
        const moviesData = await response.json();

        this.setState({
            movies: moviesData.data,
            hasNextPage: moviesData.meta.hasNextPage,
            hasPrevPage: moviesData.meta.hasPrevPage,
        });
    }

    componentDidMount() {
        this.updateMovies();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.page !== prevState.page) {
            this.updateMovies();
        }
    }

    render() {
        return (
            <>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Movies List</h1>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Awards</th>
                            <th scope="col">Length</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie) => {
                            return (
                                <tr key={movie.id}>
                                    <th scope="row">{movie.id}</th>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre?.name}</td>
                                    <td>{movie.awards}</td>
                                    <td>{movie.length}</td>
                                    <td>{movie.rating}</td>
                                    <td>{movie.release_date}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-primary"
                        disabled={!this.state.hasPrevPage}
                        onClick={() => {
                            this.setState({
                                page: this.state.page - 1,
                            });
                        }}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <p className="p-3">Pagina: {this.state.page + 1}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            this.setState({
                                page: this.state.page + 1,
                            });
                        }}
                        disabled={!this.state.hasNextPage}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </>
        );
    }
}

export default MoviesList;
