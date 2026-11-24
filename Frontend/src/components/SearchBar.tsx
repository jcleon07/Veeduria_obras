import { type SubmitEvent } from "react";
import "./SearchBar.css"
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import searchIcon from "../assets/Search_icon.svg";

export default function SearchBar() {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
      <form className="search-bar" role="search" aria-label="Buscar obras" onSubmit={handleSubmit}>
        <img className="size-7 shrink-0" src={searchIcon} alt="" />
        <label className="sr-only" htmlFor="artwork-search">
        </label>
        <input
          id="artwork-search"
          className="min-w-0 flex-1 bg-transparentxs font-space-mono text-[17px] leading-8 text-[#000000] outline-none placeholder:text-[#000000]"
          type="search"
          placeholder="Buscar obras"
        />
        <IconButton aria-label="delete" size="small">
          <TuneIcon fontSize="small" sx={{ color: "#000000", fontSize: "26px" }}/>
        </IconButton>
      </form>
  );
}