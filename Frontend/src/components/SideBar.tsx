import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { MenuIcon,
    AccountCircleIcon,
    BookmarkBorderIcon,
    LibraryBooksIcon,
    NotificationsIcon,
    SettingsIcon,
    HelpIcon,
    LoginIcon  } from './Icons';
import { useNavigate } from 'react-router-dom';

function SideBar({expanded, setExpanded}:any ){
    const navigate = useNavigate();
    return (
        <aside className={`relative box border-gray-300 h-screen flex flex-col transition-all ${expanded ? 'w-50 sm:w-50' : 'w-0 sm:w-20'}`}>
            <div className="flex items-center justify-between p-2 pb-2 cursor-pointer"
            onClick={() => navigate('/')}>
                <img className="h-16 w-16 md:h-16 md:w-16" 
                src="src/assets/logo.svg" 
                alt="Logo"/>
                <p className={`p-2 text-black font-space-mono font-bold text-[15px] ${expanded ? 'block' : 'hidden'}`}>
                    Veeduría Distrital
                </p>
            </div>
            <ul className={`flex flex-col ${expanded ? 'items-start' : 'items-center'} justify-start gap-2 p-2`}>
                <div>
                <li className={`${expanded ? 'p-1' : 'p-0'}`}>
                    <IconButton onClick={() => setExpanded((value: boolean) => !value)}>
                        <MenuIcon sx={{ color: "#000000", fontSize: "26px" }} />
                    </IconButton>
                </li>
                <li>
                    {expanded ?
                    <button
                        type="button"
                        onClick={() => navigate('/profile')}
                        className={`
                        h-10 flex items-center gap-3 rounded-2xl
                        transition-all duration-200
                        hover:bg-gray-100
                        w-45 
                        justify-start 
                        px-3
                        cursor-pointer
                        `}
                    >
                        <AccountCircleIcon sx={{ color: "#000000", fontSize: "26px" }} />

                        {expanded && (
                        <span className="whitespace-nowrap font-space-mono text-[13px]">
                            Mi cuenta
                        </span>
                        )}
                    </button>
                    :
                    <IconButton onClick={() => navigate('/profile')}>
                        <AccountCircleIcon sx={{ color: "#000000", fontSize: "26px" }} />
                    </IconButton>
                    }
                </li>
                <li>
                    {expanded ?
                    <button
                        type="button"
                        onClick={() => navigate('/saved-works')}
                        className={`
                        h-10 flex items-center gap-3 rounded-2xl
                        transition-all duration-200
                        hover:bg-gray-100
                        w-45 
                        justify-start 
                        px-3
                        cursor-pointer
                        `}
                    >
                        <BookmarkBorderIcon sx={{ color: "#000000", fontSize: "26px" }} />

                        {expanded && (
                        <span className="whitespace-nowrap font-space-mono text-[13px]">
                            Obras guardadas
                        </span>
                        )}
                    </button>
                    :
                    <IconButton onClick={() => navigate('/saved-works')}>
                        <BookmarkBorderIcon sx={{ color: "#000000", fontSize: "26px" }} />
                    </IconButton>
                    }
                </li>
                <li>
                    {expanded ?
                    <button
                        type="button"
                        onClick={() => navigate('/petitions')}
                        className={`
                        h-10 flex items-center gap-3 rounded-2xl
                        transition-all duration-200
                        hover:bg-gray-100
                        w-45 
                        justify-start 
                        px-3
                        cursor-pointer
                        `}
                    >
                        <LibraryBooksIcon sx={{ color: "#000000", fontSize: "26px" }} />

                        {expanded && (
                        <span className="whitespace-nowrap font-space-mono text-[13px]">
                            Mis peticiones
                        </span>
                        )}
                    </button>
                    :
                    <IconButton onClick={() => navigate('/petitions')}>
                        <LibraryBooksIcon sx={{ color: "#000000", fontSize: "26px" }} />
                    </IconButton>
                    }
                </li>
                <li>
                    {expanded ?
                    <button
                        type="button"
                        onClick={() => null}
                        className={`
                        h-10 flex items-center gap-3 rounded-2xl
                        transition-all duration-200
                        hover:bg-gray-100
                        w-45 
                        justify-start 
                        px-3
                        cursor-pointer
                        `}
                    >
                        <NotificationsIcon sx={{ color: "#000000", fontSize: "26px" }} />

                        {expanded && (
                        <span className="whitespace-nowrap font-space-mono text-[13px]">
                            Notificaciones
                        </span>
                        )}
                    </button>
                    :
                    <IconButton onClick={() => null}>
                        <NotificationsIcon sx={{ color: "#000000", fontSize: "26px" }} />
                    </IconButton>
                    }
                </li>
                </div>
            </ul>
            <div className="flex-grow"/>
            <ul className={`flex flex-col ${expanded ? 'items-start' : 'items-center'} justify-end gap-2 p-2`}>
                <div>
                <li>
                    {expanded ?
                    <button
                        type="button"
                        onClick={() => navigate('/login')}
                        className={`
                        h-10 flex items-center gap-3 rounded-2xl
                        transition-all duration-200
                        hover:bg-gray-100
                        w-45 
                        justify-start 
                        px-3
                        cursor-pointer
                        `}
                    >
                        <LoginIcon sx={{ color: "#000000", fontSize: "26px" }} />

                        {expanded && (
                        <span className="whitespace-nowrap font-space-mono text-[13px]">
                            Iniciar sesión
                        </span>
                        )}
                    </button>
                    :
                    <IconButton onClick={() => navigate('/login')}>
                        <LoginIcon sx={{ color: "#000000", fontSize: "26px" }} />
                    </IconButton>
                    }
                </li>
                <li>
                    {expanded ?
                    <button
                        type="button"
                        onClick={() => null}
                        className={`
                        h-10 flex items-center gap-3 rounded-2xl
                        transition-all duration-200
                        hover:bg-gray-100
                        w-45 
                        justify-start 
                        px-3
                        cursor-pointer
                        `}
                    >
                        <HelpIcon sx={{ color: "#000000", fontSize: "26px" }} />

                        {expanded && (
                        <span className="whitespace-nowrap font-space-mono text-[13px]">
                            Ayuda
                        </span>
                        )}
                    </button>
                    :
                    <IconButton onClick={() => null}>
                        <HelpIcon sx={{ color: "#000000", fontSize: "26px" }} />
                    </IconButton>
                    }
                </li>
                <li>
                    {expanded ?
                    <button
                        type="button"
                        onClick={() => null}
                        className={`
                        h-10 flex items-center gap-3 rounded-2xl
                        transition-all duration-200
                        hover:bg-gray-100
                        w-45 
                        justify-start 
                        px-3
                        cursor-pointer
                        `}
                    >
                        <SettingsIcon sx={{ color: "#000000", fontSize: "26px" }} />

                        {expanded && (
                        <span className="whitespace-nowrap font-space-mono text-[13px]">
                            Configuración
                        </span>
                        )}
                    </button>
                    :
                    <IconButton onClick={() => null}>
                        <SettingsIcon sx={{ color: "#000000", fontSize: "26px" }} />
                    </IconButton>
                    }
                </li>
                </div>
            </ul>
        </aside>
    )
}    

export default function SideBarNav() {
    const [expanded, setExpanded] = useState(false);
    return (
        <SideBar expanded={expanded} setExpanded={setExpanded}>

        </SideBar>
    );
}