import BigCardRow from "./BigCardRow";
import SmallCardRow from "./SmallCardRow";

function DashboardContent() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      {/* <!-- Content Row Movies--> */}
      <SmallCardRow />
      {/* <!-- End movies in Data Base --> */}

      {/* <!-- Content Row Last Movie in Data Base --> */}
      <BigCardRow />
    </div>
  );
}

export default DashboardContent;
