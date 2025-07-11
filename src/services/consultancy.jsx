import Navbar from "../header";
import Footer from "../footer";
import { motion } from "framer-motion";
import layers from "../assets/layers.jpg"

const consultancyImage = "https://images.unsplash.com/photo-1576765607925-bf6d6a5ca1dd"; // Replace with your own or local asset

const consultancyServices = [
  {
    title: "Veterinary Advice",
    description: "Professional guidance for animal health, disease prevention, and treatment plans.",
    image: "https://th.bing.com/th/id/OIP.YjKtKWnELsFNikrnfHdJlAHaE9?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Farm Setup & Planning",
    description: "Expert help on setting up animal or crop farms from scratch with modern practices.",
    image: "https://th.bing.com/th/id/OIP.M9nCxvJln6qCHKZVTpgSNwAAAA?w=252&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Livestock Nutrition",
    description: "Get recommendations on feed formulations, supplements, and growth optimization.",
    image: "https://th.bing.com/th/id/OIP.5C49pKX8HHv8931say0B4AHaE7?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const Consultancy = () => {
  return (
    <main>
      <div className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[300px]">
          <img
            src={layers}
            alt="General Consultancy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">General Consultancy</h1>
          </div>
        </section>

        {/* Info */}
        <section className="max-w-6xl mx-auto px-4 py-10 text-center">
          <p className="text-lg text-gray-700">
            Our consultancy services at Trekarios are tailored to support farmers, entrepreneurs, and livestock keepers with expert advice, professional planning, and hands-on training to achieve success in agriculture and animal care.
          </p>
        </section>

        {/* Services */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {consultancyServices.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-trek1">{service.title}</h2>
                  <p className="text-gray-600 text-sm mt-2">{service.description}</p>
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

export default Consultancy;
