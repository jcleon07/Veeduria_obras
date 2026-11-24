import {useNavigate} from "react-router-dom";
import { ArrowBackIosIcon } from "../../components/Icons";
import TextBox from "../../components/TextBox";
import Buttons from "../../components/Buttons";

export default function NewPassword() {
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
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-space-mono text-[18px] font-bold mt-10">
                        Cambiar contraseña
                    </h1>
                    <h2 className="ml-3 text black font-space-mono text-[15px] mt-4 w-100 text-start">
                        Ingrese la nueva contraseña que desea establecer para su cuenta
                    </h2>
                </div>
                <div className="flex flex-col mt-4 gap-4 w-1/2 mx-auto">
                    <TextBox placeholder="Ingrese su nueva contraseña" type="password" maxLength={40} />
                    <TextBox placeholder="Confirme su nueva contraseña" type="password" maxLength={40} />
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <Buttons text="Cambiar contraseña" onClick={() => navigate('/login')} size='55' />
                </div>
            </div>
        </main>
    );
}