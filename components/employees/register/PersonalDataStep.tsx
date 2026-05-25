"use client";
import React from "react";
import { DOCUMENT_TYPES } from "../../../services/registerEmployeeService";

interface Props {
  data: any;
  onChange: (patch: any) => void;
  /** Errores por campo (provistos por el wizard tras validar al avanzar). */
  errors?: Record<string, string>;
}

// Helpers de estilo consistentes entre campos: borde rojo si hay error.
const baseInput =
  "w-full px-3 py-2.5 sm:px-4 sm:py-3 border-2 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2ECC71] focus:border-[#2ECC71] text-gray-700";
const inputClass = (hasError?: boolean) =>
  `${baseInput} ${hasError ? "border-red-400 bg-red-50" : "border-gray-300"}`;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs font-medium text-red-600">{message}</p>;
}

const PersonalDataStep: React.FC<Props> = ({ data, onChange, errors = {} }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-8">
      {/* Left Column - Personal Info */}
      <div className="space-y-4 sm:space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-[#203D47] uppercase mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            value={data.fullName || ""}
            onChange={(e) => onChange({ fullName: e.target.value })}
            className={inputClass(!!errors.fullName)}
            placeholder="Jonathan Doe"
          />
          <FieldError message={errors.fullName} />
        </div>

        {/* Document Type & Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#203D47] uppercase mb-2">
              Tipo de Documento
            </label>
            <select
              value={data.documentType || ""}
              onChange={(e) => onChange({ documentType: e.target.value })}
              className={inputClass(!!errors.documentType)}
            >
              <option value="">Seleccionar tipo</option>
              {DOCUMENT_TYPES.map((d: any) => (
                <option key={d.id} value={d.id}>
                  {d.nombre}
                </option>
              ))}
            </select>
            <FieldError message={errors.documentType} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#203D47] uppercase mb-2">
              Número de Documento
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={data.documentNumber || ""}
              onChange={(e) => onChange({ documentNumber: e.target.value })}
              className={inputClass(!!errors.documentNumber)}
              placeholder="12345678"
            />
            <FieldError message={errors.documentNumber} />
          </div>
        </div>

        {/* Email — el backend no acepta teléfono en InviteUserDto. Si en el
            futuro se agrega, recuperar el input desde el historial git. */}
        <div>
          <label className="block text-xs font-semibold text-[#203D47] uppercase mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            value={data.email || ""}
            onChange={(e) => onChange({ email: e.target.value })}
            className={inputClass(!!errors.email)}
            placeholder="john.doe@example.com"
          />
          <FieldError message={errors.email} />
        </div>

        {/* Edad — el backend la valida como entero entre 18 y 100. */}
        <div>
          <label className="block text-xs font-semibold text-[#203D47] uppercase mb-2">
            Edad
          </label>
          <input
            type="number"
            min={18}
            max={100}
            value={data.age ?? ""}
            onChange={(e) => {
              const v = e.target.value;
              onChange({ age: v === "" ? undefined : Number(v) });
            }}
            className={inputClass(!!errors.age)}
            placeholder="30"
          />
          <FieldError message={errors.age} />
        </div>
      </div>
    </div>
  );
};

export default PersonalDataStep;
