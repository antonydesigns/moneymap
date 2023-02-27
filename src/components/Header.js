// libraries
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="mt-4">
      <div className="logo mid text-3xl font-bold">Money Map</div>
      <div className="navbar mid">
        <Link
          className="navlink mx-2 mt-5 rounded border border-black px-2 hover:bg-green-300 active:bg-yellow-200"
          to="/"
        >
          Home
        </Link>
        <Link
          className="navlink mx-2 mt-5 rounded border border-black px-2 hover:bg-green-300"
          to="/create"
        >
          Create New
        </Link>
      </div>
    </nav>
  );
}

export default Header;
