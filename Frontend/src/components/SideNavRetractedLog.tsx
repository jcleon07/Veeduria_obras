import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

export default function SideNavRetractedLog() {
    return (
        <main>
        <div className="absolute top-30 left-9.5">
            <IconButton aria-label="Menu" size="small">
                <MenuIcon fontSize="large" sx={{ color: "#243C4C" }} />
            </IconButton>
        </div>
        <div className="absolute top-43 left-9.5">
            <IconButton aria-label="Account" size="small">
                <AccountCircleIcon fontSize="large" sx={{ color: "#243C4C" }} />
            </IconButton>
        </div>
        <div className="absolute top-56 left-9.5">
            <IconButton aria-label="Account" size="small">
                <BookmarkBorderIcon fontSize="large" sx={{ color: "#243C4C" }} />
            </IconButton>
        </div>
        <div className="absolute top-69 left-9.5">
            <IconButton aria-label="Account" size="small">
                <LibraryBooksIcon fontSize="large" sx={{ color: "#243C4C" }} />
            </IconButton>
        </div>
        <div className="absolute top-82 left-9.5">
            <IconButton aria-label="Account" size="small">
                <NotificationsIcon fontSize="large" sx={{ color: "#243C4C" }} />
            </IconButton>
        </div>
        <div className="absolute bottom-31.5 left-9.5">
            <IconButton aria-label="Account" size="small">
                <LogoutIcon fontSize="large" sx={{ color: "#243C4C" }} />
            </IconButton>
        </div>
        <div className="absolute bottom-18.5 left-9.5">
            <IconButton aria-label="Account" size="small">
                <HelpIcon fontSize="large" sx={{ color: "#243C4C" }} />
            </IconButton>
        </div>
        <div className="absolute bottom-5.5 left-9.5">
            <IconButton aria-label="Account" size="small">
                <SettingsIcon fontSize="large" sx={{ color: "#243C4C" }} />
            </IconButton>
        </div>
        </main>
    );
}