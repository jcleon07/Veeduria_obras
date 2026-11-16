import { type SubmitEvent } from "react";
import "./SearchBar.css"
const assetPathPrefix = "src/assets";

export default function SearchBar() {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
      <form className="search-bar" role="search" aria-label="Buscar obras" onSubmit={handleSubmit}>
        <img className="size-8 shrink-0" src={`${assetPathPrefix}/Search_icon.svg`} alt="" />
        <label className="sr-only" htmlFor="artwork-search">
        </label>
        <input
          id="artwork-search"
          className="min-w-0 flex-1 bg-transparentxs font-space-mono text-[22px] leading-8 text-[#243c4c] outline-none placeholder:text-[#243c4c]"
          type="search"
          placeholder="Buscar obras"
        />
        <button
          className="grid size-8 shrink-0 cursor-pointer place-items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#698696]"
          type="button"
          aria-label="Abrir filtros de búsqueda"
        >
          <img className="size-8" src={`${assetPathPrefix}/Filter_icon.svg`} alt="" />
        </button>
      </form>
  );
}