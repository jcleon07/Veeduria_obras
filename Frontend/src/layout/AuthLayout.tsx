import { Outlet } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { HelpIcon, SettingsIcon } from "../utils/Icons";

export default function MainLayout(){
    return (
        <div className="flex h-screen bg-[var(--app-background-color)]">
            <div className="flex flex-col absolute bottom-0 left-1 left-0 p-4 gap-2">
                <IconButton onClick={() => null} sx={{"&:hover": { backgroundColor: "var(--app-icon-hover-color)",},}}>
                    <HelpIcon sx={{ color:"var(--app-icon-color)", fontSize: "26px" }} />
                </IconButton>
                <IconButton onClick={() => null} sx={{"&:hover": { backgroundColor: "var(--app-icon-hover-color)",},}}>
                    <SettingsIcon sx={{ color: "var(--app-icon-color)", fontSize: "26px" }} />
                </IconButton>
            </div>
            <main className="min-w-0 flex-1">
                <Outlet />
            </main>
        </div>
    );
}