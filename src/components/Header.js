// libraries
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-green-300 py-4">
      <div className="logo mid text-3xl font-bold">Money Map</div>
      <div className="navbar mid">
        <Link
          className="navlink mx-2 mt-5 rounded border border-black bg-green-400 px-2 hover:bg-green-200"
          to="/"
        >
          Home
        </Link>
        <Link
          className="navlink mx-2 mt-5 rounded border border-black bg-green-400 px-2 hover:bg-green-200"
          to="/create"
        >
          Create New
        </Link>
      </div>
    </nav>
  );
}

export default Header;
