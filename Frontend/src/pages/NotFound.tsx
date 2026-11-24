import {useNavigate} from "react-router-dom";
import olruggioImage from "../assets/olruggio.jpg";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <main className="flex justify-center items-center h-screen w-full overflow-hidden">
            <div className="flex justify-start items-center flex-col flex-1">
                <div className="flex flex-col items-center justify-center mt-10">
                    <img src={olruggioImage} alt="Olruggio" className="w-40 h-40" />
                    <h1 className="font-space-mono text-[18px] font-bold mt-4">
                        Error 404: Página no encontrada
                    </h1>
                    <h2 className="ml-3 text black font-space-mono text-[15px] mt-4 w-100 text-start">
                        La página que está buscando no existe o ha sido movida. Verifique la URL o regrese a la página de inicio.
                    </h2>
                </div>
                
                <div className="flex flex-row justify-center items-center mt-10">
                    <button className="cursor-pointer w-45 bg-[#000000] text-white font-space-mono text-[15px] py-2 px-4 rounded-xl hover:bg-gray-700"
                            onClick={() => navigate('/')}>
                        Volver al inicio
                    </button>
                </div>
            </div>
        </main>
    );
}