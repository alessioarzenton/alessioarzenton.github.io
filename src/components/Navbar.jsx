import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[640px] items-center justify-between px-6 py-3.5">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-text">
          <img src="/avatar.png" alt="Alessio Arzenton" className="h-8 w-8 rounded-full" />
        </NavLink>
        <ul className="flex list-none gap-6">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-text" : "text-muted hover:text-text"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-text" : "text-muted hover:text-text"}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
