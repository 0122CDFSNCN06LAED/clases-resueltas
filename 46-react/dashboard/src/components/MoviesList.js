import { Component } from "react";

class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/api/movies");
    const moviesData = await response.json();
    this.setState({
      movies: moviesData.data,
    });
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
      </>
    );
  }
}

export default MoviesList;
