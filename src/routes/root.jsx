import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar" className="bg-gray-800 text-gray-500 dark:text-gray-400">
          <nav>
            <ul>
              <li>
              <Link to={`home`}>HOME</Link>
              </li>
              <li>
              <Link to={`listapokemon`}>Lista de Pokemon</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
        <Outlet></Outlet>
        </div>
      </>
    );
  }