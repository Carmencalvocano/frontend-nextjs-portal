import { offers } from "../data/offers";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ofertas disponibles</h1>
      <ul className="space-y-4">
        {offers.map((offer) => (
          <li
            key={offer.id}
            className="p-4 border rounded-xl shadow-sm hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{offer.title}</h2>
            <p className="text-gray-600">
              {offer.company} — {offer.location}
            </p>
            <p className="text-sm text-gray-500">
              Skills: {offer.skills.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
