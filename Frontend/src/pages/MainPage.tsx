import SearchBar from "../components/SearchBar";
import LeafMap from "../components/LeafMap";

export default function MainPage() {
    return (
        <main className="flex h-full w-full flex-col overflow-hidden">
            <div className="shrink-0 p-1">
                <SearchBar />
            </div>
            <div className="min-h-0 flex-1 p-1">
                <LeafMap />
            </div>
        </main>
    );
}