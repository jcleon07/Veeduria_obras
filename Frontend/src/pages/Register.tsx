import {useNavigate} from "react-router-dom";
import {ArrowBackIosIcon} from "../components/Icons";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import logo from "../assets/logo.svg";
import TextBox from "../components/TextBox";
import Buttons from "../components/Buttons";

export default function Register() {
    const navigate = useNavigate();
    return (
        <main className="flex justify-center items-center h-screen w-full overflow-hidden">
            <div className="flex justify-start flex-col flex-1 border-box max-w-200 h-130 border-2 border-gray-500 border-solid rounded-3xl p-1">
                <div className="flex justify-start items-center flex-row">
                    <button onClick={() => navigate(-1)} className="mr-2 font-space-mono text-[15px] p-3 rounded-3xl hover:bg-gray-100 flex items-cente cursor-pointer">
                        <ArrowBackIosIcon />
                        Atras
                    </button>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                        <img className="h-15 w-15 md:h-15 md:w-15" 
                        src={logo} 
                        alt="Logo"/>
                        <p className="p-2 text-black font-space-mono font-bold text-[18px]">
                            Bienvenido, regístrese para continuar
                        </p>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <div className= "flex flex-row w-full justify-center items-center gap-4 ">
                        <div className="w-1/3">
                            <TextBox name="Nombre" placeholder="Ingrese su nombre" type="text" maxLength={40} />
                        </div>
                        <div className="w-1/3">
                            <TextBox name="Apellido" placeholder="Ingrese su apellido" type="text" maxLength={40} />
                        </div>
                    </div>
                    <div className= "flex flex-row justify-center items-center gap-4">
                        <div className="w-1/3">
                            <TextBox name="Correo electrónico" placeholder="Ingrese su correo electrónico" type="email" maxLength={40} />
                        </div>
                        <div className="w-1/3">
                            <TextBox name="Confirmar correo" placeholder="Confirme su correo" type="email" maxLength={40} />
                        </div>
                    </div>
                    <div className= "flex flex-row justify-center items-center gap-4">
                        <div className="w-1/3">
                            <TextBox name="Contraseña" placeholder="Ingrese su contraseña" type="password" maxLength={40} />
                        </div>
                        <div className="w-1/3">
                            <TextBox name="Confirmar contraseña" placeholder="Confirme su contraseña" type="password"  maxLength={40}/>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <FormGroup>
                            <FormControlLabel required control={<Checkbox sx={{color: '#000000', '&.Mui-checked': {color: '#000000',},}} />} 
                            label="Acepto los términos y condiciones"
                            sx={{ '& .MuiFormControlLabel-label': { fontFamily: 'Space Mono', fontSize: '15px' } }}
                            />
                        </FormGroup>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <Buttons text="Registrarse" onClick={() => null} size='45' />
                        <Buttons text="Cancelar" onClick={() => navigate('/')} size='45' />
                    </div>
                </div>
            </div>
        </main>
    );
}