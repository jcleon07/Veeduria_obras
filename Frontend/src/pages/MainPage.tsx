import SearchBar from "../components/SearchBar";
import LeafMap from "../components/LeafMap";
import SideNavRetractedLog from "../components/SideNavRetractedLog";

export default function MainPage() {
    return (
        <main className="h-screen w-full overflow-hidden">
            <div className="absolute top-3 left-3 md:top-5 md:left-5">
                <img className="h-15 w-15 md:h-20 md:w-20" src="src/assets/logo.png" alt="Logo" />
            </div>
            <div className="absolute top-3 md:top-5 right-5 w-auto max-w-full md:right-5 left-22 md:left-31 sm:left-22">
                <SearchBar />
            </div>
            <div>
                <SideNavRetractedLog />
            </div>
            <div >
                <LeafMap />
            </div>
        </main>

    );
}