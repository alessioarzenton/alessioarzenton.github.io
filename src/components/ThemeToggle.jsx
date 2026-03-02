import useTheme from "../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-md border border-border px-2 py-1 text-sm text-muted transition-colors hover:border-muted hover:text-text"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☀︎" : "☾"}
    </button>
  );
}

export default ThemeToggle;
