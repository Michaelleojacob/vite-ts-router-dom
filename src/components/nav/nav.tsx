import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to={"/"}>home</Link>
      <Link to={"/tasks"}>tasks</Link>
      <Link to={"/counter"}>counter</Link>
    </div>
  );
};

export default Nav;
