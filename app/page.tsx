"use client";
import { useEffect, useState } from "react";

type Oferta = {
  id: number;
  titulo: string;
  descripcion: string;
  empresa_id: number;
  empresa_nombre: string;
};

export default function HomePage() {
  const [ofertas, setOfertas] = useState<Oferta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://172.29.9.23:8000/ofertas/")  // URL de tu backend FastAPI
      .then((res) => res.json())
      .then((data) => {
        setOfertas(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando ofertas:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">Cargando ofertas...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ofertas disponibles</h1>
      <ul className="space-y-4">
        {ofertas.map((offer) => (
          <li
            key={offer.id}
            className="p-4 border rounded-xl shadow-sm hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{offer.titulo}</h2>
            <p>{offer.descripcion}</p>
            <p className="text-gray-500">Empresa: {offer.empresa_nombre}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
