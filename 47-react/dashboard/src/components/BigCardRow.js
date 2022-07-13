import GenresInDbCard from "./GenresInDBCard";
import LastMovieInDb from "./LastMovieCard";

function BigCardRow() {
  return (
    <div className="row">
      {/* <!-- Last Movie in DB --> */}
      <LastMovieInDb />
      <GenresInDbCard />
    </div>
  );
}

export default BigCardRow;
