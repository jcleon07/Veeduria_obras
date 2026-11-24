import {useNavigate} from "react-router-dom";
import { ArrowBackIosIcon } from "../../components/Icons";
import { type ChangeEvent, type ClipboardEvent, useRef, useState } from "react";
import Buttons from "../../components/Buttons";

export default function VerifyCode() {
    const navigate = useNavigate();
    
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const [code, setCode] = useState(["", "", "", "", "", ""]);

    function handleInput(event: ChangeEvent<HTMLInputElement>, index: number) {
        const value = event.target.value
            .replace(/[^a-zA-Z0-9]/g, "")
            .slice(-1)
            .toUpperCase();

        setCode((currentCode) => {
            const newCode = [...currentCode];
            newCode[index] = value;
            return newCode;
        });

        if (value === "") {
            inputRefs[index - 1]?.current?.focus();
        } else if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
        }
    }
    function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
        event.preventDefault();

        const pastedCode = event.clipboardData
            .getData("text")
            .replace(/[^a-zA-Z0-9]/g, "")
            .slice(0, 6)
            .toUpperCase();

        if (pastedCode.length === 6) {
            setCode(pastedCode.split(""));
            inputRefs[5].current?.focus();
        }
    }

    return (
        <main className="flex justify-center items-center h-screen w-full overflow-hidden">
            <div className="flex justify-start flex-col flex-1 border-box max-w-200 h-130 border-2 border-gray-500 border-solid rounded-3xl p-1">
                <div className="flex justify-start items-center flex-row">
                    <button onClick={() => navigate(-1)} className="mr-2 font-space-mono text-[15px] p-3 rounded-3xl hover:bg-gray-100 flex items-cente cursor-pointer">
                        <ArrowBackIosIcon />
                        Atras
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center mt-10">
                    <h1 className="font-space-mono text-[18px] font-bold">
                        Verificar código
                    </h1>
                    <h2 className="ml-3 text black font-space-mono text-[15px] mt-4 w-100 text-start">
                        Ingrese el código de verificación que se envió a su correo electrónico
                    </h2>
                </div>
                <div className="flex flex-col mt-4">
                    <form className="flex flex-row justify-center items-center w-full">
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                ref={inputRefs[index]}
                                type="text"
                                maxLength={1}
                                value={code[index]}
                                inputMode="text"
                                autoComplete={index === 0 ? "one-time-code" : "off"}
                                onChange={(e) => handleInput(e, index)}
                                onPaste={handlePaste}
                                className="text-center m-1 mb-4 p-2 border border-gray-300 rounded-xl w-10 font-space-mono text-[15px] uppercase"
                            />
                        ))}
                    </form>
                </div>
                <div className="flex flex-row justify-center items-center mt-2">
                    <Buttons text="Verificar código" onClick={() => navigate('/recover/new-password')} size='45' />
                </div>
            </div>
        </main>
    );
}