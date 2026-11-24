import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import Buttons from "../components/Buttons";

export default function RouteError() {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <main className="flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="font-space-mono text-[18px] font-bold mt-4">Error {error.status}</h1>
        <p className="text black font-space-mono text-[15px]">{error.statusText}</p>

        <Buttons text="Volver al inicio" onClick={() => navigate("/")} />
      </main>
    );
  }

  if (import.meta.env.DEV) {
    console.error(error);
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-space-mono text-[18px] font-bold mt-4">Ocurrió un error inesperado</h1>
      <p className="text black font-space-mono text-[15px]">No pudimos cargar esta página.</p>
      <Buttons text="Volver al inicio" onClick={() => navigate("/")} />
    </main>
  );
}