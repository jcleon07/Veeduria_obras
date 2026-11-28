import {useNavigate} from "react-router-dom";
import { ArrowBackIosIcon } from "../../utils/Icons";
import InputBox from "../../components/InputBox";
import Buttons from "../../components/Buttons";
import { useState } from "react";
import {validateEmail}  from "../../utils/validate";
import Button from '@mui/material/Button';

export default function Identify() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailValido, setEmailValido] = useState<boolean | null>(null);

    return (
        <main className="flex justify-center items-center h-screen w-full overflow-hidden">
            <div className="flex justify-start flex-col flex-1 border-box max-w-200 h-130 border-[1.5px] border-[var(--app-border-color)] border-solid rounded-3xl p-1">
                <div className="flex justify-start items-center flex-row">
                    <Button
                    onClick={() => navigate(-1)}
                    sx={{
                        minWidth: 0,
                        padding: 1,
                        borderRadius: 20,
                        color: "var(--app-font-color-primary)",
                        fontFamily: '"Space Mono", monospace',
                        fontSize: "var(--app-font-size-third)",
                        fontWeight: 400,
                        textTransform: "none",
                        "&:hover": { backgroundColor: "var(--app-icon-hover-color)"},
                    }}
                    >
                        <ArrowBackIosIcon sx={{ color: "var(--app-icon-color)", fontSize: "22px" }} />
                        Atras
                    </Button>
                </div>
                <div className="flex flex-col mt-20 gap-4">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="font-space-mono text-[length:var(--app-font-size-second)] text-[var(--app-font-color-primary)] font-bold gap-1">
                            Recupera tu cuenta
                        </h1>
                        <h2 className="ml-3 text-[var(--app-font-color-primary)] font-space-mono text-[length:var(--app-font-size-third)] w-100 text-start">
                            Ingrese su correo electrónico para enviarle un código de verificación.
                        </h2>
                    </div>
                    <div className="mx-auto flex w-1/2 items-center justify-center">
                        <InputBox placeholder="Ingrese su correo electrónico" label="email" type="email" maxLength={40} value={email} onChange={setEmail} 
                        onBlur={(email) => setEmailValido(validateEmail(email))} 
                        validate={emailValido !== false} 
                        message="Ingresa un correo válido."/>
                    </div>
                    <div className="flex justify-center items-center">
                        <Buttons text="Enviar código" onClick={() => navigate('/recover/verify-code')} size='45' />
                    </div>
                </div>
            </div>
        </main>
    );
}