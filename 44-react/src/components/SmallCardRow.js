import SmallCard from "./SmallCard";

function SmallCardRow() {
  return (
    <div className="row">
      {/* <!-- Movies in Data Base --> */}
      <SmallCard />

      {/* <!-- Total awards --> */}
      <SmallCard />

      {/* <!-- Actors quantity --> */}
      <SmallCard />
    </div>
  );
}

export default SmallCardRow;
