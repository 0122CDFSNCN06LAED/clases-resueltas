import { Route, Switch } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import Footer from "./Footer";
import GenresInDbCard from "./GenresInDBCard";
import LastMovieInDb from "./LastMovieCard";
import MoviesList from "./MoviesList";
import TopBar from "./TopBar";

function MainContent() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />

        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={DashboardContent} />
            <Route path="/genres" component={GenresInDbCard} />
            <Route path="/last-movie" component={LastMovieInDb} />
            <Route path="/movies" component={MoviesList} />
          </Switch>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MainContent;
