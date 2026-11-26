import Buttons from "../components/Buttons";
import InputBox from "../components/InputBox";
import { useNavigate } from "react-router-dom";
import ListPetitions from "../components/ListPetitions";
import { BookmarkBorderIcon,
    LibraryBooksIcon,
    FileUploadIcon } from "../utils/Icons";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import { ButtonBase } from "@mui/material";

export default function Profile() {
    const navigate = useNavigate();
    const [editing, setEditing] = useState<boolean | null>(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [avatarSrc, setAvatarSrc] = useState<string | undefined>(undefined);
    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
        if (file) {
        // Read the file as a data URL
        const reader = new FileReader();
        reader.onload = () => {
            setAvatarSrc(reader.result as string);
        };
        reader.readAsDataURL(file);
        }
    };

    return (
        <main className="h-full w-full p-6 box-border">
            <div className="flex h-full w-full gap-4 overflow-hidden">
                <div className="flex min-w-0 flex-[2] flex-col">
                    <div className="flex h-full flex-col border-2 border-box border-gray-500 p-4 rounded-xl gap-1">
                        <div className="flex flex-row items-center gap-8 p-2">
                            <ButtonBase
                            component="label"
                            role={undefined}
                            tabIndex={-1}
                            aria-label="Avatar image"
                            disabled={editing ? false : true}
                            sx={{
                                borderRadius: '100px',
                                '&:has(:focus-visible)': {
                                    outline: '1px solid',
                                    outlineOffset: '2px',
                                },
                                position: 'relative',
                                height: 120,
                                width: 120,

                            }}
                            >
                            <Avatar
                            alt="Foto de perfil"
                            src={avatarSrc}
                            sx={{ width: 120, height: 120, border: '1px solid #000000' }}
                            />
                            {editing && (
                            <div className="absolute">
                                <FileUploadIcon
                                sx={{
                                    
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    display: 'flex',
                                    color: 'black',
                                    backgroundColor: 'white',
                                    borderRadius: '50%',
                                    height: 50,
                                    width: 50,
                                    p: 0.5,
                                    '&:hover': {
                                        backgroundColor: '#b2b5bb',
                                        cursor: 'pointer',
                                    },
                                }}
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{
                                    border: 0,
                                    clipPath: 'inset(50%)',
                                    height: '1px',
                                    margin: '-1px',
                                    overflow: 'hidden',
                                    padding: 0,
                                    position: 'absolute',
                                    whiteSpace: 'nowrap',
                                    width: '1px',
                                    }}
                                    onChange={handleAvatarChange}
                                />  
                            </div>    
                            )}
                            </ButtonBase>
                            <InputBox name="Nombre de usuario" label="name" type="text" value={name} onChange={setName} isDisabled={!editing} maxLength={40}
                                validate={true}/>
                        </div>
                        <div className="flex flex-col items-center p-2 gap-4">
                            <InputBox name="Correo electrónico" label="email" type="email" value="ejemplo@correo.com" onChange={setDate} isDisabled 
                            validate={true}/>
                            <InputBox name="Fecha de registro" label="date" type="date" value="01-01-2023" onChange={setDate} isDisabled 
                            validate={true}/>
                            <InputBox name="Descripción" label="description" placeholder="Añade una descripción" type="text" value={description} onChange={setDescription} maxLength={200} isDisabled={!editing} multiLine={true}
                            validate={true}/>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4 p-2">
                            <Buttons text={editing ? "Guardar cambios" : "Editar perfil"} onClick={() => setEditing((current) => !current)} />
                            <Buttons text="Actualizar Contraseña" onClick={() => {navigate('/recover/identify')}} />
                        </div>
                    </div>
                </div>
                <div className="flex min-w-0 flex-[2] flex-col gap-4">
                    <div className="h-1/2 border-2 border-box border-gray-500 overflow-hidden rounded-xl">
                    <ListPetitions
                        name="Obras"
                        description="Tus obras guardadas."
                        values={[0, 1, 2, 3, 4, 5, 6]}
                        onClick={(value) => navigate(`/petition/${value}`)}
                        icon={<BookmarkBorderIcon sx={{ color: "#ffffff", fontSize: "26px" }} />}
                    />
                    </div>
                    <div className="h-1/2 border-2 border-box border-gray-500 overflow-hidden rounded-xl">
                    <ListPetitions
                        name="Actividad"
                        description="Mi actividad reciente."
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