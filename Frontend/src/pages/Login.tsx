import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/logo.svg";
import TextBox from "../components/TextBox";
import Buttons from "../components/Buttons";

export default function Login() {
    const navigate = useNavigate();
    return (
        <main className="flex justify-center items-center h-screen w-full overflow-hidden">
            <div className="flex justify-center items-center flex-1 border-box max-w-200 h-130 border-2 border-gray-500 border-solid rounded-3xl p-1">
                <div>
                    <div className="flex flex-row items-center justify-center">
                        <img className="h-20 w-20 md:h-20 md:w-20" 
                        src={logo} 
                        alt="Logo"/>
                        <p className="p-2 text-black font-space-mono font-bold text-[20px]">
                            Iniciar sesión
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 p-2">
                        <TextBox name="Correo electrónico" placeholder="ejemplo@correo.com" type="email" maxLength={40} />
                        <TextBox name="Contraseña" placeholder="Ingrese su contraseña" type="password" maxLength={40} />
                    </div>
                    <div className="flex flex-row justify-center items-center p-2 gap-4">
                        <Buttons text="Iniciar sesión" onClick={() => null} size='45' />
                        <Buttons text="Cancelar" onClick={() => navigate('/')} size='45' />
                    </div>
                    <div className="flex flex-row justify-center items-center p-2 gap-4">
                        <Link to="/recover/identify" className="text-center text-[#0000EE] font-space-mono text-[15px] hover:underline">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    <div className="flex flex-row justify-center items-center p-2 gap-4">
                        <p className="text-center text-[#000000] font-space-mono text-[15px]">
                            ¿No tiene una cuenta?
                        </p>
                        <Buttons text="Registrarse" onClick={() => navigate('/register')} size='45' />
                    </div>
                </div>
            </div>
        </main>
    );
}