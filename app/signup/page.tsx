import { Suspense } from "react";
import RegisterForm from "@/components/auth/RegisterForm";

export default function Register() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* IZQUIERDA */}
      <div className="bg-[#0f2235] text-white flex flex-col justify-between gap-8 p-6 sm:p-8 md:p-10">

        <div className="flex items-center gap-2 font-semibold text-sm sm:text-base">
          <p>Portal de Talento Humano</p>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-2">
            Registra y gestiona el talento de tu organización
          </h1>
        </div>
      </div>

      {/* DERECHA */}
      <div className="bg-gray-100 flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
        <Suspense fallback={<div>Cargando...</div>}>
          <RegisterForm />
        </Suspense>
      </div>
    </div>
  );
}