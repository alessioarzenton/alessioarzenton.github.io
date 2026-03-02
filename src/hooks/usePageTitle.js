import { useEffect } from "react";

function usePageTitle(title) {
  useEffect(() => {
    const base = "Alessio Arzenton";
    document.title = title ? `${title} — ${base}` : base;
  }, [title]);
}

export default usePageTitle;
