import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

            {/* Fondo de la Izquierda de la pantalla */}
            <div className="bg-[#0f2235] text-white flex flex-col justify-between gap-8 p-6 sm:p-8 md:p-10">

                <div className="flex items-center gap-2 font-semibold text-sm sm:text-base">

                    <p>Portal de Talento Humano</p>
                </div>

                <div>

                    <h1 className="text-xl sm:text-2xl font-bold mb-2">
                        La puerta de la aplicación para gestionar el talento global
                    </h1>


                </div>


            </div>

            {/* Formulario a la derecha de la pantalla. */}
            <div className="bg-gray-100 flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
                <LoginForm />
            </div>
        </div>
    );
}