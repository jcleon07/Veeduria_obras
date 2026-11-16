import SearchBar from "../components/SearchBar";

export default function MainPage() {
    return (
        <main>
            <div className="absolute top-3 left-3 md:top-5 md:left-5">
                <img className="h-15 w-15 md:h-20 md:w-20" src="src/assets/logo.png" alt="Logo" />
            </div>
            <div className="absolute top-3 md:top-5 right-5 md:right-5 left-22 md:left-31 sm:left-22">
                <SearchBar />
            </div>
        </main>

    );
}