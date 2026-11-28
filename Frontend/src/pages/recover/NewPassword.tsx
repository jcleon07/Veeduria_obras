import {useNavigate} from "react-router-dom";
import { ArrowBackIosIcon } from "../../utils/Icons";
import InputBox from "../../components/InputBox";
import Buttons from "../../components/Buttons";
import { useState } from "react";
import {validatePassword, validateEqual}  from "../../utils/validate";
import Button from '@mui/material/Button';

export default function NewPassword() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState<boolean | null>(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validConfirmPassword, setValidConfirmPassword] = useState<boolean | null>(null);

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
                        "&:hover": { backgroundColor: "var(--app-icon-hover-color)" },
                    }}
                    >
                        <ArrowBackIosIcon sx={{ color: "var(--app-icon-color)", fontSize: "22px" }} />
                        Atras
                    </Button>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-space-mono text-[var(--app-font-color-primary)] text-[length:var(--app-font-size-second)] font-bold mt-10">
                        Cambiar contraseña
                    </h1>
                    <h2 className="ml-3 text-[var(--app-font-color-primary)] font-space-mono text-[length:var(--app-font-size-third)] mt-4 w-100 text-start">
                        Ingrese la nueva contraseña que desea establecer para su cuenta
                    </h2>
                </div>
                <div className="flex flex-col mt-4 gap-4 w-1/2 mx-auto">
                    <InputBox placeholder="Ingrese su nueva contraseña" label="password" type="password" maxLength={40} value={password} onChange={setPassword}
                        onBlur={(password)=>setValidPassword(validatePassword(password))}
                        validate={validPassword !== false}
                        message="Contraseña debe ser mayor a 10 caracteres, usar una mayuscula, un símbolo y un número como mínimo"/>
                    <InputBox placeholder="Confirme su nueva contraseña" label="password" type="password" maxLength={40} value={confirmPassword} onChange={setConfirmPassword}
                        onBlur={(confirmPassword)=>setValidConfirmPassword(validateEqual(password,confirmPassword))}
                        validate={validConfirmPassword !== false}
                        message="Contraseña es distinta"/>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <Buttons text="Cambiar contraseña" onClick={() => navigate('/login')} size='55' />
                </div>
            </div>
        </main>
    );
}