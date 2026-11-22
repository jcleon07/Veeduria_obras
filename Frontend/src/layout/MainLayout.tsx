import SideBarNav from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

    return (
        <div className="flex h-screen">
            <SideBarNav />
            <main className="min-w-0 flex-1">
            <Outlet />
            </main>
        </div>
    );
}