import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
  ];
  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-160 items-center justify-between px-6 py-3.5">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-text"
        >
          <img
            src="/avatar.png"
            alt="Alessio Arzenton"
            className="h-8 w-8 rounded-full"
          />
        </NavLink>
        <div className="flex items-center gap-6">
        <ul className="flex list-none gap-6">
          {navItems &&
            navItems.map((item) => (
              <li key={item.label.toLowerCase()}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${isActive ? "text-text" : "text-muted hover:text-text"}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
        </ul>
        <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
