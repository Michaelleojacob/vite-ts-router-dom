import Nav from "./components/nav/nav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-nav">
        <Nav />
      </div>
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
