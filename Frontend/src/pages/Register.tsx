import {useNavigate} from "react-router-dom";
import {ArrowBackIosIcon} from "../utils/Icons";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import logo from "../assets/logo.svg";
import InputBox from "../components/InputBox";
import Buttons from "../components/Buttons";
import { useState } from "react";
import {validateEmail, validateEntry, validateEqual, validatePassword}  from "../utils/validate";
import Button from '@mui/material/Button';
import TermsDialog from "../components/TermsDialog";

export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validName, setValidName] = useState<boolean | null>(null);
    const [validLastName, setValidLastName] = useState<boolean | null>(null);
    const [validEmail, setValidEmail] = useState<boolean | null>(null);
    const [validConfirmEmail, setValidConfirmEmail] = useState<boolean | null>(null);
    const [validPassword, setValidPassword] = useState<boolean | null>(null);
    const [validConfirmPassword, setValidConfirmPassword] = useState<boolean | null>(null);
    const [openTermsDialog, setOpenTermsDialog] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    return (
        <main className="flex justify-center items-center h-screen w-full overflow-hidden">
            <div className="flex justify-start flex-col flex-1 border-box max-w-200 h-130 border-2 border-gray-500 border-solid rounded-3xl p-1">
                <div className="flex justify-start items-center flex-row">
                    <Button
                    onClick={() => navigate(-1)}
                    sx={{
                        minWidth: 0,
                        padding: 1,
                        borderRadius: 20,
                        color: "var(--app-icon-color)",
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
                <div className="flex flex-row items-center justify-center gap-2">
                        <img className="h-15 w-15 md:h-15 md:w-15" 
                        src={logo} 
                        alt="Logo"/>
                        <p className="p-2 text-[var(--app-font-color-primary)] font-space-mono font-bold text-[length:var(--app-font-size-second)]">
                            Bienvenido, regístrese para continuar
                        </p>
                </div>
                <div className="flex flex-col gap-4 p-4">
                    <div className= "flex flex-row w-full justify-center items-center gap-8">
                        <div className="w-1/3">
                            <InputBox name="Nombre" label="name" placeholder="Ingrese su nombre" type="text" maxLength={40} value={name} onChange={setName}
                             onBlur={(name)=>setValidName(validateEntry(name))}
                             validate={validName !== false}
                             message = "Campo obligatorio"/>
                        </div>
                        <div className="w-1/3">
                            <InputBox name="Apellido" label="last-name" placeholder="Ingrese su apellido" type="text" maxLength={40} value={lastName} onChange={setLastName} 
                             onBlur={(lastName)=>setValidLastName(validateEntry(lastName))}
                             validate={validLastName !== false}
                             message = "Campo obligatorio"/>
                        </div>
                    </div>
                    <div className= "flex flex-row justify-center items-center gap-8">
                        <div className="w-1/3">
                            <InputBox name="Correo electrónico" label="email" placeholder="Ingrese su correo electrónico" type="email" maxLength={40} value={email} onChange={setEmail} 
                             onBlur={(email)=>setValidEmail(validateEmail(email))}
                             validate={validEmail !== false}
                             message = "Ingrese un email válido."/>
                        </div>
                        <div className="w-1/3">
                            <InputBox name="Confirmar correo" label="email" placeholder="Confirme su correo" type="email" maxLength={40} value={confirmEmail} onChange={setConfirmEmail} 
                            onBlur={(confirmEmail)=>setValidConfirmEmail(validateEqual(email, confirmEmail))}
                            validate={validConfirmEmail !== false}
                            message = "Email es distinto"/>
                        </div>
                    </div>
                    <div className= "flex flex-row justify-center items-center gap-8">
                        <div className="w-1/3">
                            <InputBox name="Contraseña" label="password" placeholder="Ingrese su contraseña" type="password" maxLength={40} value={password} onChange={setPassword} 
                            onBlur={(password)=>setValidPassword(validatePassword(password))}
                            validate={validPassword !== false}
                            message="Contraseña debe ser mayor a 10 caracteres, usar una mayuscula, un símbolo y un número como mínimo"/>
                        </div>
                        <div className="w-1/3">
                            <InputBox name="Confirmar contraseña" label="confirm-password" placeholder="Confirme su contraseña" type="password"  maxLength={40} value={confirmPassword} onChange={setConfirmPassword} 
                            onBlur={(confirmPassword)=>setValidConfirmPassword(validateEqual(password,confirmPassword))}
                            validate={validConfirmPassword !== false}
                            message="Contraseña es distinta"/>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <FormGroup>
                            <FormControlLabel required control={<Checkbox checked={agreedToTerms} onClick={()=> setOpenTermsDialog(true)} sx={{color: 'var(--app-link-color)', '&.Mui-checked': {color: 'var(--app-link-color)',},}} />} 
                            label="Acepto los términos y condiciones"
                            sx={{ '& .MuiFormControlLabel-label': { fontFamily: 'Space Mono', fontSize: 'var(--app-)', color: 'var(--app-link-color)', '&:hover': { fontWeight: 'bold' } } }}
                            />
                        </FormGroup>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <Buttons text="Registrarse" onClick={() => null} size='45' />
                        <Buttons text="Cancelar" onClick={() => navigate('/')} size='45' />
                    </div>
                </div>
            </div>
            <TermsDialog 
            open={openTermsDialog} 
            onAgree={() => {setOpenTermsDialog(false); setAgreedToTerms(true)}} 
            onDisagree={()=>{setOpenTermsDialog(false); setAgreedToTerms(false)}} 
            onClose={() => setOpenTermsDialog(false)} 
            />
        </main>
    );
}