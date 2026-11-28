import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/logo.svg";
import InputBox from "../components/InputBox";
import Buttons from "../components/Buttons";
import { useState } from "react";
import {validateEmail, validateEntry}  from "../utils/validate";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailValido, setEmailValido] = useState<boolean | null>(null);
    const [password, setPassword] = useState('');
    const [passwordValido, setPasswordValido] = useState<boolean | null>(null);
    
    const iniciarSesion = () => {
    console.log({ email, password });
    }; // prueba de funcionalidad, ni por el putas esto puede salir a prod

    return (
        <main className="flex justify-center items-center h-screen w-full overflow-hidden">
            <div className="flex justify-center items-center flex-1 border-box max-w-200 h-130 border-[1.5px] border-[var(--app-border-color)] border-solid rounded-3xl p-1 bg-[var(--app-background-elements-color)]">
                <div>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <img className="h-20 w-20 md:h-20 md:w-20" 
                        src={logo} 
                        alt="Logo"/>
                        <p className="p-2 text-[var(--app-font-color-primary)] font-space-mono font-bold text-[length:var(--app-font-size-first)]">
                            Iniciar sesión
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 p-2">
                        <InputBox name="Correo electrónico" label="email" placeholder="Ingrese su correo" type="email" maxLength={40} value={email} onChange={setEmail} 
                        onBlur={(email) => setEmailValido(validateEmail(email))} 
                        validate={emailValido !== false} 
                        message="Ingresa un correo válido."/>
                        <InputBox name="Contraseña" label="password" placeholder="Ingrese su contraseña" type="password" maxLength={40} value={password} onChange={setPassword} 
                        onBlur={(password) => setPasswordValido(validateEntry(password))}
                        validate={passwordValido !== false}
                        message="Campo obligatorio."/>
                    </div>
                    <div className="flex flex-row justify-center items-center p-2 gap-4">
                        <Buttons text="Iniciar sesión" onClick={iniciarSesion} size='45' />
                        <Buttons text="Cancelar" onClick={() => navigate('/')} size='45' />
                    </div>
                    <div className="flex flex-row justify-center items-center p-2 gap-4">
                        <Link to="/recover/identify" className="text-center text-[var(--app-link-color)] font-space-mono text-[length: var(--app-font-size-third)] hover:underline hover:text-[var(--app-link-color)] hover:font-bold">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    <div className="flex flex-row justify-center items-center p-2 gap-4">
                        <p className="text-center text-[var(--app-font-color-primary)] font-space-mono text-[length: var(--app-font-size-third)]">
                            ¿No tiene una cuenta?
                        </p>
                        <Buttons text="Registrarse" onClick={() => navigate('/register')} size='45' />
                    </div>
                </div>
            </div>
        </main>
    );
}