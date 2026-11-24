import Buttons from "../components/Buttons";
import TextBox from "../components/TextBox";
import { useNavigate } from "react-router-dom";
import ListPetitions from "../components/ListPetitions";
import { BookmarkBorderIcon,
    LibraryBooksIcon } from "../components/Icons";
import Avatar from '@mui/material/Avatar';
import profileImage from '../assets/profile.jpg';

export default function Profile() {
    const navigate = useNavigate();
    return (
        <main className="h-full w-full p-6 box-border">
            <div className="flex h-full w-full gap-4 overflow-hidden">
                <div className="flex min-w-0 flex-[2] flex-col">
                    <div className="flex h-full flex-col border border-box border-gray-300 p-4 rounded-xl gap-1">
                        <div className="flex flex-row items-center gap-8 p-2">
                                <Avatar
                                alt="Foto de perfil"
                                src={profileImage}
                                sx={{ width: 120, height: 120,border: "1px solid #434953", boxSizing: "border-box",}}
                                />
                                <TextBox name="Nombre de usuario" placeholder="Pepito" type="text" isDisabled />
                        </div>
                        <div className="flex flex-col items-center p-2 gap-4">
                            <TextBox name="Correo electrónico" placeholder="ejemplo@correo.com" type="email" isDisabled />
                            <TextBox name="Fecha de registro" placeholder="01/01/2023" type="text" isDisabled />
                            <TextBox name="Descripción" placeholder="Añade una descripción" type="text" isDisabled />
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4 p-2">
                            <Buttons text="Editar perfil" onClick={() => {}} />
                            <Buttons text="Actualizar Contraseña" onClick={() => {navigate('/recover/identify')}} />
                        </div>
                    </div>
                </div>
                <div className="flex min-w-0 flex-[2] flex-col gap-4">
                    <div className="h-1/2 border border-box border-gray-300 overflow-hidden rounded-xl">
                    <ListPetitions
                        name="Obras"
                        description="Tus obras guardadas."
                        values={[0, 1, 2, 3, 4, 5, 6]}
                        onClick={(value) => navigate(`/petition/${value}`)}
                        icon={<BookmarkBorderIcon sx={{ color: "#ffffff", fontSize: "26px" }} />}
                    />
                    </div>
                    <div className="h-1/2 border border-box border-gray-300 overflow-hidden rounded-xl">
                    <ListPetitions
                        name="Peticiones"
                        description="Tus peticiones más recientes."
                        values={[0, 1, 2, 3, 4, 5, 6]}
                        onClick={(value) => navigate(`/petition/${value}`)}
                        icon={<LibraryBooksIcon sx={{ color: "#ffffff", fontSize: "26px" }} />}
                    />
                    </div>
                </div>
            </div>
        </main>
    );
}