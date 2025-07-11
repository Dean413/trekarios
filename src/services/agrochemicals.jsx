import Navbar from "../header";
import Footer from "../footer";
import { motion } from "framer-motion";

const agroImage = "https://th.bing.com/th/id/OIP.RSn6zobSY4wQW7YRDWuc5wHaE8?w=282&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"; // Replace with your preferred image or use a local asset

const agroProducts = [
  {
    name: "Herbicides",
    description: "Effective weed control solutions for all types of crops.",
    image: "https://th.bing.com/th/id/OIP.0B3YaIgHjQLHoj4IVOea0gAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Insecticides",
    description: "Protect your crops from pests and insects with our tested products.",
    image: "https://th.bing.com/th/id/OIP.jAu0TKwWGW0v_Wzpdd9gPAAAAA?w=196&h=173&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Fungicides",
    description: "Combat fungal infections and keep your yield healthy.",
    image: "https://th.bing.com/th/id/OIP.USCXV3XvW8Ey2Cgu3sP0JgHaHa?w=152&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Fertilizers",
    description: "Nutrient-rich formulas to boost crop productivity.",
    image: "https://th.bing.com/th/id/OIP.MsCRx7ePgPx518ib4VzETQHaF-?w=233&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const Agrochemicals = () => {
  return (
    <main>
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[300px]">
          <img
            src={agroImage}
            alt="Agrochemicals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Agrochemicals & Inputs</h1>
          </div>
        </section>

        {/* Info Section */}
        <section className="max-w-6xl mx-auto px-4 py-10 text-center">
          <p className="text-lg text-gray-600">
            At Trekarios, we offer a wide range of high-quality agrochemical products to meet the needs of farmers and agricultural professionals. From fertilizers to pest control solutions, we've got you covered.
          </p>
        </section>

        {/* Product Grid */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {agroProducts.map((product, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-trek1">{product.name}</h2>
                  <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Agrochemicals;
