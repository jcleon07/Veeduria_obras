import {useNavigate} from "react-router-dom";
import {ArrowBackIosIcon} from "../components/Icons";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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
                <div className="flex flex-row items-center justify-center">
                        <img className="h-15 w-15 md:h-15 md:w-15" 
                        src="src/assets/logo.svg" 
                        alt="Logo"/>
                        <p className="p-2 text-black font-space-mono font-bold text-[18px]">
                            Bienvenido, regístrese para continuar
                        </p>
                </div>
                <div className= "flex flex-row justify-center items-center mt-4">
                    <div className="flex flex-col">
                        <h2 className="ml-3 text black font-space-mono text-[15px]">Nombre</h2>
                        <form className="flex flex-col items-center w-70">
                            <input
                                type="name"
                                placeholder="Ingrese su nombre"
                                className="mb-4 p-2 border border-gray-300 rounded-xl w-full placeholder:text-gray-400 placeholder:font-space-mono placeholder:text-[15px] font-space-mono text-[15px]"
                            />
                        </form>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="ml-9 text black font-space-mono text-[15px]">Apellido</h2>
                        <form className="flex flex-col items-center w-70 ml-6">
                            <input
                                type="name"
                                placeholder="Ingrese su apellido"
                                className="mb-4 p-2 border border-gray-300 rounded-xl w-full placeholder:text-gray-400 placeholder:font-space-mono placeholder:text-[15px] font-space-mono text-[15px]"
                            />
                        </form>
                    </div>
                </div>
                <div className= "flex flex-row justify-center items-center">
                    <div className="flex flex-col">
                        <h2 className="ml-3 text black font-space-mono text-[15px]">Correo electrónico</h2>
                        <form className="flex flex-col items-center w-70">
                            <input
                                type="email"
                                placeholder="Ingrese su correo"
                                className="mb-4 p-2 border border-gray-300 rounded-xl w-full placeholder:text-gray-400 placeholder:font-space-mono placeholder:text-[15px] font-space-mono text-[15px]"
                            />
                        </form>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="ml-9 text black font-space-mono text-[15px]">Confirme su correo</h2>
                        <form className="flex flex-col items-center w-70 ml-6">
                            <input
                                type="email"
                                placeholder="Confirme su correo"
                                className="mb-4 p-2 border border-gray-300 rounded-xl w-full placeholder:text-gray-400 placeholder:font-space-mono placeholder:text-[15px] font-space-mono text-[15px]"
                            />
                        </form>
                    </div>
                </div>
                <div className= "flex flex-row justify-center items-center">
                    <div className="flex flex-col">
                        <h2 className="ml-3 text black font-space-mono text-[15px]">Contraseña</h2>
                        <form className="flex flex-col items-center w-70">
                            <input
                                type="password"
                                placeholder="Ingrese su contraseña"
                                className="mb-4 p-2 border border-gray-300 rounded-xl w-full placeholder:text-gray-400 placeholder:font-space-mono placeholder:text-[15px] font-space-mono text-[15px]"
                            />
                        </form>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="ml-9 text black font-space-mono text-[15px]">Confirme su contraseña</h2>
                        <form className="flex flex-col items-center w-70 ml-6">
                            <input
                                type="password"
                                placeholder="Confirme su contraseña"
                                className="mb-4 p-2 border border-gray-300 rounded-xl w-full placeholder:text-gray-400 placeholder:font-space-mono placeholder:text-[15px] font-space-mono text-[15px]"
                            />
                        </form>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <FormGroup>
                        <FormControlLabel required control={<Checkbox sx={{color: '#000000', '&.Mui-checked': {color: '#000000',},}} />} 
                        label="Acepto los términos y condiciones"
                        sx={{ '& .MuiFormControlLabel-label': { fontFamily: 'Space Mono', fontSize: '15px' } }}
                        />
                    </FormGroup>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <button className="cursor-pointer w-45 bg-[#000000] text-white font-space-mono text-[15px] py-2 px-4 rounded-xl hover:bg-gray-700">
                            Registrarse
                        </button>
                        <button className="cursor-pointer w-45 ml-10 bg-[#000000] text-white font-space-mono text-[15px] py-2 px-4 rounded-xl hover:bg-gray-700"
                        onClick={() => navigate('/')}>
                            Cancelar
                        </button>
                </div>
            </div>
        </main>
    );
}