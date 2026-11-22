import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    return (
        <main className="flex justify-center items-center h-screen w-full overflow-hidden">
            <div className="flex justify-center items-center flex-1 border-box max-w-200 h-130 border-2 border-gray-500 border-solid rounded-3xl p-1">
                <div>
                    <div className="flex flex-row items-center justify-center">
                        <img className="h-20 w-20 md:h-20 md:w-20" 
                        src="src/assets/logo.svg" 
                        alt="Logo"/>
                        <p className="p-2 text-black font-space-mono font-bold text-[20px]">
                            Veeduría Distrital
                        </p>
                    </div>
                    <div className="flex flex-col mt-4">
                        <h2 className="ml-3 text black font-space-mono text-[15px]">Correo electrónico</h2>
                        <form className="flex flex-col items-center w-full">
                            <input
                                type="email"
                                placeholder="Ingrese su correo electrónico"
                                className="mb-4 p-2 border border-gray-300 rounded-xl w-full placeholder:text-gray-400 placeholder:font-space-mono placeholder:text-[15px] font-space-mono text-[15px]"
                            />
                        </form>
                        <h2 className="ml-3 text black font-space-mono text-[15px]">Contraseña</h2>    
                        <form className="flex flex-col items-center w-full">
                            <input
                                type="password"
                                placeholder="Ingrese su contraseña"
                                className="mb-4 p-2 border border-gray-300 rounded-xl w-full placeholder:text-gray-400 placeholder:font-space-mono placeholder:text-[15px] font-space-mono text-[15px]"
                            />
                        </form>
                    </div>
                    <div className="flex flex-row justify-center items-center mt-4">
                        <button className="cursor-pointer w-45 bg-[#000000] text-white font-space-mono text-[15px] py-2 px-4 rounded-xl hover:bg-gray-700">
                            Iniciar sesión
                        </button>
                        <button className="cursor-pointer w-45 ml-4 bg-[#000000] text-white font-space-mono text-[15px] py-2 px-4 rounded-xl hover:bg-gray-700"
                        onClick={() => navigate('/')}>
                            Cancelar
                        </button>
                    </div>
                    <div>
                        <p className="mt-4 text-center text-gray-500 font-space-mono text-[15px]">
                            <a href="/recover/identify" 
                            className="text-blue-500 hover:underline">¿Olvidó su contraseña?
                            </a>
                        </p>
                    </div>
                    <div className="flex flex-row justify-center items-center mt-4">
                        <p className="text-center text-[#000000] font-space-mono text-[15px]">
                            ¿No tiene una cuenta?
                        </p>
                        <button className="cursor-pointer w-45 ml-4 bg-[#000000] text-white font-space-mono text-[15px] py-2 px-4 rounded-xl hover:bg-gray-700"
                        onClick={() => navigate('/register')}>
                            Regístrese aquí
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}