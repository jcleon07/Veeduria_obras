import {useNavigate} from "react-router-dom";
import { ArrowBackIosIcon } from "../../components/Icons";

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
                <div className="flex flex-col mt-4">
                    <form className="flex flex-col items-center w-full">
                        <input
                            type="password"
                            placeholder="Ingrese su nueva contraseña"
                            className="mb-4 p-2 border border-gray-300 rounded-xl w-100 placeholder:text-gray-400 placeholder:font-space-mono placeholder:text-[15px] font-space-mono text-[15px]"
                        />
                    </form>
                    <form className="flex flex-col items-center w-full">
                        <input
                            type="confirm-password"
                            placeholder="Confirme su nueva contraseña"
                            className="mb-4 p-2 border border-gray-300 rounded-xl w-100 placeholder:text-gray-400 placeholder:font-space-mono placeholder:text-[15px] font-space-mono text-[15px]"
                        />
                    </form>
                </div>
                <div className="flex flex-row justify-center items-center mt-2">
                    <button className="cursor-pointer w-70 bg-[#000000] text-white font-space-mono text-[15px] py-2 px-4 rounded-xl hover:bg-gray-700"
                            onClick={() => navigate('/login')}>
                        Actualizar contraseña
                    </button>
                </div>
            </div>
        </main>
    );
}