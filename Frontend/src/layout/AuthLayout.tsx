import { Outlet } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { HelpIcon, SettingsIcon } from "../utils/Icons";

export default function MainLayout() {

    return (
        <div className="flex h-screen">
            <div className="flex flex-col absolute bottom-0 left-0 m-4">
                <IconButton onClick={() => null}>
                        <HelpIcon sx={{ color: "#000000", fontSize: "26px" }} />
                </IconButton>
                <IconButton onClick={() => null}>
                        <SettingsIcon sx={{ color: "#000000", fontSize: "26px" }} />
                </IconButton>
            </div>
            <main className="min-w-0 flex-1">
            <Outlet />
            </main>
        </div>
    );
}