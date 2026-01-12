import CakeCard from "@/components/itemCard/CakeCard";



export default function CakesPage() {
  const cakes = [
    {
      id: 1,
      name: "Chocolate Truffle Cake",
      price: 1200,
      offerPrice: 950,
      discount: 20,
      image:
        "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Strawberry Cream Cake",
      price: 1000,
      offerPrice: 850,
      discount: 15,
      image:
        "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Our Popular Cakes 🎂
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cakes.map((cake) => (
          <CakeCard key={cake.id} {...cake} />
        ))}
      </div>
    </section>
  );
}
