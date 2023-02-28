// libraries
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-green-300 p-4">
      <div className="logo mid text-3xl font-bold">Money Map</div>

      <div className="navbar mt-5 w-full columns-2 px-16 ">
        <Link
          to="/"
          className=" navlink block rounded border border-black bg-green-400 px-2 text-center hover:bg-green-200"
        >
          Home
        </Link>

        <Link
          to="/create"
          className="navlink block rounded border border-black bg-green-400 px-2 text-center hover:bg-green-200"
        >
          Create New
        </Link>
      </div>
    </nav>
  );
}

export default Header;
