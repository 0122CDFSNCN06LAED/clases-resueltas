import "./assets/App.css";
import MainContent from "./components/MainContent";

import SideBar from "./components/Sidebar";

function App() {
  return (
    <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <SideBar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <MainContent />
      {/* <!-- End of Content Wrapper --> */}
    </div>
  );
}

export default App;
