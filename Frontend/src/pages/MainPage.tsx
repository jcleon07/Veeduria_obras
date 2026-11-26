import SearchBar from "../components/SearchBar";
import LeafMap from "../components/LeafMap";

export default function MainPage() {
    return (
        <main className="flex h-full w-full flex-col overflow-hidden p-1">
            <div className="shrink-0 p-2">
                <SearchBar />
            </div>
            <div className="min-h-0 flex-1 p-2">
                <LeafMap />
            </div>
        </main>
    );
}