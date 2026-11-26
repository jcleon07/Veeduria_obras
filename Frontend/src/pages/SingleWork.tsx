import ListPetitions from "../components/ListPetitions";
import { StarIcon, CommentIcon, ArrowBackIosIcon } from "../utils/Icons";
import { LineChart } from "@mui/x-charts/LineChart";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import obraImage from '../assets/obras.jpg';
import { useNavigate } from "react-router-dom";
import Card from "../components/Cards";

const cardExport =
    {
        id: 1,
        title: "Exportar",
        description: "Descarga la obra en un archivo PDF",
    }

const cardFavorite =
    {
        id: 2,
        title: "Favoritos",
        description: "Agrega la obra a tu lista de favoritos",
    }
    

export default function SingleWork() {
    const navigate = useNavigate();
    const progressByMonth = [2, 5.5, 12.5, 28.5, 31.5, 55];
    const latestProgress = progressByMonth[progressByMonth.length - 1];
    return (
        <main className="flex h-screen min-h-0 w-full flex-col gap-4 overflow-hidden p-6">
            <div className="flex min-h-0 flex-[2]">
                <div className="flex min-h-0 flex-[4] box-border border-2 border-gray-500 rounded-2xl p-4 items-center">
                    <Avatar
                    alt="Foto de perfil"
                    src={obraImage}
                    sx={{ width: 110, height: 110, border: '1px solid #000000' }}
                    />
                    <div className="flex min-w-0 flex-1 flex-col gap-2 pl-4">
                        <h2 className="font-space-mono text-[20px] font-bold">Adecuación Avenida Cra 68 para Transmilenio Grupo 4</h2>
                        <p className="font-space-mono text-[14px] text-gray-500">Descripción primaria de la obra</p>
                        <p className="font-space-mono text-[14px] text-gray-500">Descripción secundaria de la obra</p>
                    </div>
                </div>
                <div className="flex relative min-h-0 flex-[2] flex-col justify-end p-4 items-center">
                    <div className="flex flex-col items-end absolute top-0 right-4">
                        <Button
                            onClick={() => navigate(-1)}
                            sx={{
                                minWidth: 0,
                                padding: 1,
                                borderRadius: 3,
                                color: "#000000",
                                fontFamily: '"Space Mono", monospace',
                                border: '1px solid #d1d1d1',
                                fontSize: "13px",
                                fontWeight: 400,
                                textTransform: "none",
                                "&:hover": { backgroundColor: "#f3f4f6" },
                            }}
                            >
                                <ArrowBackIosIcon sx={{ color: "#000000", fontSize: "24px" }} />
                                Atras
                            </Button>
                    </div>
                    <div className="flex flex-row items-center gap-4 justify-center">
                        <Card id={cardExport.id} title={cardExport.title} description={cardExport.description} onSelect={() => null} />
                        <Card id={cardFavorite.id} title={cardFavorite.title} description={cardFavorite.description} onSelect={() => null} />
                    </div>
                </div>
            </div>
            <div className="flex min-h-0 min-w-0 flex-[6] gap-4">
                <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4">
                    <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto rounded-2xl border-2 border-gray-500 p-4">
                        <section className="flex flex-col gap-3">
                            <h2 className="font-space-mono text-[14px] font-bold">Ubicación y cronograma</h2>
                            <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                                <div>
                                    <dt className="font-space-mono text-[11px] text-gray-500">Localidad</dt>
                                    <dd className="font-space-mono text-[13px] font-medium">Localidad de la obra</dd>
                                </div>
                                <div>
                                    <dt className="font-space-mono text-[11px] text-gray-500">Última actualización</dt>
                                    <dd className="font-space-mono text-[13px] font-medium">26/11/2026</dd>
                                </div>
                                <div>
                                    <dt className="font-space-mono text-[11px] text-gray-500">Fecha de inicio</dt>
                                    <dd className="font-space-mono text-[13px] font-medium">26/11/2026</dd>
                                </div>
                                <div>
                                    <dt className="font-space-mono text-[11px] text-gray-500">Fecha de entrega</dt>
                                    <dd className="font-space-mono text-[13px] font-medium">26/11/2026</dd>
                                </div>
                            </dl>
                        </section>
                        <section className="flex flex-col gap-3 border-t border-gray-200 pt-3">
                            <h2 className="font-space-mono text-[14px] font-bold">Información contractual</h2>
                            <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                                <div>
                                    <dt className="font-space-mono text-[11px] text-gray-500">Entidad encargada</dt>
                                    <dd className="font-space-mono text-[13px] font-medium">IDU</dd>
                                </div>
                                <div>
                                    <dt className="font-space-mono text-[11px] text-gray-500">Presupuesto</dt>
                                    <dd className="font-space-mono text-[13px] font-medium">$1.000.000.000</dd>
                                </div>
                                <div>
                                    <dt className="font-space-mono text-[11px] text-gray-500">Constructora</dt>
                                    <dd className="font-space-mono text-[13px] font-medium">DMG</dd>
                                </div>
                                <div>
                                    <dt className="font-space-mono text-[11px] text-gray-500">Vigencia del contrato</dt>
                                    <dd className="font-space-mono text-[13px] font-medium">Hasta el 30/01/2027</dd>
                                </div>
                            </dl>
                        </section>
                    </div>
                    <section className="flex min-h-0 flex-1 flex-col gap-2 rounded-2xl border-2 border-gray-500 bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <h2 className="font-space-mono text-[14px] font-bold">Avance de la obra</h2>
                                <p className="font-space-mono text-[11px] text-gray-500">Progreso reportado por mes</p>
                            </div>
                            <div className="shrink-0 rounded-xl bg-blue-50 px-3 py-2 text-right">
                                <p className="font-space-mono text-[10px] font-bold text-blue-700">{latestProgress}%</p>
                                <p className="font-space-mono text-[10px] text-blue-700">último registro</p>
                            </div>
                        </div>
                        <LineChart
                            height={150}
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10], scaleType: 'linear', label: 'Mes del proyecto' }]}
                            series={[
                                {
                                    data: progressByMonth,
                                    curve: 'natural',
                                    showMark: true,
                                    shape: 'circle',
                                    label: 'Avance reportado',
                                    color: '#2563eb',
                                },
                            ]}
                            grid={{ horizontal: true }}
                            yAxis={[{ label: 'Avance (%)', min: 0, max: 100 }]}
                        />
                    </section>
                </div>
                <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4">
                    <div className="flex relative min-h-0 w-full flex-1 box-border border-2 border-gray-500 rounded-2xl overflow-hidden">
                        <ListPetitions
                            name="Calificaciones"
                            description=""
                            values={[0, 1, 2, 3, 4, 5, 6]}
                            onClick={() => {}}
                            icon={<StarIcon sx={{ color: "#ffffff", fontSize: "26px" }} />}
                        />
                        <div className="flex flex-col items-end absolute top-0 right-0 p-2">
                            <Button
                                sx={{
                                    minWidth: 0,
                                    gap: 2,
                                    padding: 1,
                                    borderRadius: 3,
                                    border: '1px solid #d1d1d1',
                                    color: "#000000",
                                    fontFamily: '"Space Mono", monospace',
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    textTransform: "none",
                                    "&:hover": { backgroundColor: "#f3f4f6" },
                                }}
                            >
                                <StarIcon sx={{ color: "#000000", fontSize: "24px" }} />
                                Agregar calificación
                            </Button>
                        </div>
                    </div>
                    <div className="flex relative min-h-0 min-w-0 w-full flex-1 box-border border-2 border-gray-500 rounded-2xl overflow-hidden">
                        <ListPetitions
                            name="Comentarios"
                            description=""
                            values={[0, 1, 2, 3, 4, 5, 6]}
                            onClick={() => {}}
                            icon={<CommentIcon sx={{ color: "#ffffff", fontSize: "26px" }} />}
                        />
                        <div className="flex flex-col items-end absolute top-0 right-0 p-2">
                            <Button
                                sx={{
                                    minWidth: 0,
                                    gap: 2,
                                    padding: 1,
                                    borderRadius: 3,
                                    border: '1px solid #d1d1d1',
                                    color: "#000000",
                                    fontFamily: '"Space Mono", monospace',
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    textTransform: "none",
                                    "&:hover": { backgroundColor: "#f3f4f6" },
                                }}
                            >
                                <CommentIcon sx={{ color: "#000000", fontSize: "24px" }} />
                                Agregar comentario
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
