import React, { Component } from "react";

class GenresInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: null,
      bgColor: "",
    };
  }

  render() {
    if (!this.state.genres) {
      return "Cargando...";
    }

    return (
      <div className={`row ${this.state.bgColor}`}>
        {this.state.genres.map((genre) => {
          return (
            <div key={genre.id} className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{genre.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/api/genres");
    const genresListData = await response.json();
    this.setState({
      genres: genresListData.data,
    });
  }
}

export default GenresInDb;
