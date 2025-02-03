import { Link, NavLink, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <header className="flex items-center justify-between px-64 py-6 mx-auto bg-cyan-500 text-cyan-50">
        <Link to="/">
          <h1 className="text-3xl font-bold uppercase">Wild Series</h1>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <NavLink to={"/"}>Accueil</NavLink>
            </li>
            <li>
              <NavLink to={"/categories"}>Catégories</NavLink>
            </li>
            <li>
              <NavLink to={"/programs"}>Séries</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="w-4/5 min-h-screen mx-auto my-6">
        <Outlet />
      </main>

      <footer className="flex justify-center py-6 mx-auto mt-6 bg-cyan-500 text-cyan-50">
        <p className="text-center">&copy; Wild Series 2025 | Maxime Tricoche</p>
      </footer>
    </>
  );
}

export default App;
