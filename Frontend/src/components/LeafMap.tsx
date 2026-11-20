import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./LeafMap.css";

export default function MainPage() {
    return (
        <main className="absolute top-22 bottom-5 right-5 left-5 md:top-30 md:bottom-5 md:right-5 md:left-31">
            <div className="map-container" role="region" aria-label="Mapa de las obras">
                <MapContainer
                    className="h-full w-full"
                    center={[4.6356, -74.0828]}
                    zoom={16}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </main>

    );
}