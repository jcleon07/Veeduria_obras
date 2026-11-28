import SearchBar from "../components/SearchBar";
import WorkIcon from "../assets/engineer.svg";
import Lists from "../components/Lists";
import type { WorkProps } from "../types/user.types";
import { useState } from "react";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";
const cardAgregar =
    {
        id: 1,
        title: "Agregar",
        description: "Agrega una nueva obra a la plataforma",
    }

const cardFavorite =
    {
        id: 2,
        title: "Favoritos",
        description: "Filtra por tus obras favoritas",
    }

const works: WorkProps[] = [
    {
        id: 1,
        name: "Adecuación Av. Ciudad de Cali par Transmilenio Grupo 1",
        primaryDescription: "Descripción primaria de la obra 1",
        secondaryDescription: "Descripción secundaria de la obra 1",
    },
    {
        id: 2,
        name: "Adecuación Avenida Cra 68 para Transmilenio Grupo 1",
        primaryDescription: "Descripción primaria de la obra 2 lakdjshfljashdlfkjahsldjf haljsdfhajkdhsdaljskhfals kjdhfadsaflkjsd ;dskjfaljhdlkajhsf",
        secondaryDescription: "Descripción secundaria de la obra 2", 
    },
    {
        id: 3,
        name: "Adecuación Avenida Cra 68 para Transmilenio Grupo 4",
        primaryDescription: "Descripción primaria de la obra 3",
        secondaryDescription: "Descripción secundaria de la obra 3",
    },
    {
        id: 4,
        name: "Adecuación Avenida Cra 68 para Transmilenio Grupo 4",
        primaryDescription: "Descripción primaria de la obra 4",
        secondaryDescription: "Descripción secundaria de la obra 4",
    },
    {
        id: 5,
        name: "Adecuación Avenida Cra 68 para Transmilenio Grupo 4",
        primaryDescription: "Descripción primaria de la obra 5",
        secondaryDescription: "Descripción secundaria de la obra 5",
    },
    {
        id: 6,
        name: "Obra 6",
        primaryDescription: "Descripción primaria de la obra 6",
        secondaryDescription: "Descripción secundaria de la obra 6",
    },
    {
        id: 7,
        name: "Obra 7",
        primaryDescription: "Descripción primaria de la obra 7",
        secondaryDescription: "Descripción secundaria de la obra 7",
    },
    {
        id: 8,
        name: "Obra 8",
        primaryDescription: "Descripción primaria de la obra 8",
        secondaryDescription: "Descripción secundaria de la obra 8",
    },
    {
        id: 9,
        name: "Obra 9",
        primaryDescription: "Descripción primaria de la obra 9",
        secondaryDescription: "Descripción secundaria de la obra 9",
    }
];
const favorites: WorkProps[] = [
    {
        id: 1,
        name: "Obra Favorita 1",
        primaryDescription: "Descripción primaria de la obra 1",
        secondaryDescription: "Descripción secundaria de la obra 1",
    },
    {
        id: 2,
        name: "Obra Favorita 2",
        primaryDescription: "Descripción primaria de la obra 2",
        secondaryDescription: "Descripción secundaria de la obra 2",
    },
    {
        id: 3,
        name: "Obra Favorita 3",
        primaryDescription: "Descripción primaria de la obra 3",
        secondaryDescription: "Descripción secundaria de la obra 3",
    }
];

export default function Works() {
    const [favoritesButtonClicked, setFavoritesButtonClicked] = useState(false);
    const navigate = useNavigate();

    return (
        <main className="flex flex-col h-screen w-full overflow-hidden gap-2 p-6">
            <div className="flex min-h-0 flex-[2] flex-row items-center gap-4">
                <div className="flex flex-[4] flex-col min-w-0 h-full flex-1 justify-center items-start border-box border-2 border-gray-500 rounded-2xl g-2 p-4">
                    <div className="flex flex-[1]">
                    <h1 className="h-1/3 font-space-mono text-[20px] font-bold text-black">
                        {favoritesButtonClicked ? "Mis obras preferidas" : "Obras activas" }
                    </h1>
                    </div>
                    <div className="flex flex-[2]">
                    <p className="h-2/3 font-space-mono text-[13px] leading-relaxed text-gray-700">
                        {favoritesButtonClicked ? 
                        "Explora tus obras favoritas y mantente al tanto de su progreso."
                        :
                        "Aquí puedes encontrar todas las obras registradas en la plataforma. Explora y descubre información relevante sobre cada obra, incluyendo detalles técnicos, ubicación y estado actual." 
                        }   
                    </p>
                    </div>
                </div>
                <div className="flex flex-[2] flex-row gap-3 sm:ml-auto sm:justify-end">
                    <Cards id={cardAgregar.id} title={cardAgregar.title} description={cardAgregar.description} onSelect={() => null} />
                    <Cards id={cardFavorite.id} title={favoritesButtonClicked ? "Volver" : cardFavorite.title } description={favoritesButtonClicked ? "Vuelve a la búsqueda de todas las obras" : cardFavorite.description } onSelect={() => setFavoritesButtonClicked((current) => !current)} />
                </div>
            </div>
            <div className="flex flex-[1] shrink-0 p-1 items-center justify-center">
                <SearchBar />
            </div>
            <div className="flex min-h-0 flex-[7] border-box border-2 border-gray-500 rounded-2xl overflow-hidden">
                <Lists values={favoritesButtonClicked ? favorites : works} onClick={()=> navigate("/works/1")} 
                icon={<img src={WorkIcon} alt="Obras" style={{ width: '26px', height: '26px', filter: "brightness(0) invert(1)" }} />} />
            </div>
        </main>
    );
}