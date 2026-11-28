import { type SubmitEvent } from "react";
import "./SearchBar.css"
import IconButton from '@mui/material/IconButton';
import { SearchIcon, TuneIcon } from "../utils/Icons";

export default function SearchBar() {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
      <form className="search-bar" role="search" aria-label="Buscar obras" onSubmit={handleSubmit}>
        <SearchIcon sx={{ color: "var(--app-icon-color)", fontSize: "26px" }}/>
        <label className="sr-only" htmlFor="artwork-search">
        </label>
        <input
          id="artwork-search"
          className="min-w-0 flex-1 bg-transparentxs font-space-mono text-[16px] leading-8 text-[var(--app-font-color-primary)] outline-none placeholder:text-[var(--app-font-color-placeholder)]"
          type="search"
          placeholder="Buscar obras"
        />
        <IconButton aria-label="delete" size="small">
          <TuneIcon fontSize="small" sx={{ color: "var(--app-icon-color)", fontSize: "26px" }}/>
        </IconButton>
      </form>
  );
}