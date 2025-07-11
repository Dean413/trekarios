import Footer from "../footer";
import Header from "../header";
import dogFood from "../assets/dog-food.jpg";
import dogGlove from "../assets/bathing-glove.jpg";
import canFood from "../assets/can-food.jpg";
import chicken from "../assets/dog-chicken.jpg";
import dogAccessories from "../assets/pet-accessories.jpg";
import dogLeash from "../assets/padded-leash.jpg";
import tickSpray from "../assets/tick-spray.jpg";
import wash from "../assets/wash.jpg";
import fish from "../assets/dog-fish.jpg";
import dogWash from "../assets/dog-cleansing.jpg";
import dewormer from "../assets/dewormer.jpg";
import nailCutter from "../assets/nail-cutter.jpg";
import Petaccessories from "../accessories-video";
import dogChain from "../assets/chain.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PetAccessories = () => {
    const ref = useRef(null);
     const isInView = useInView(ref, { once: true });
   
     const variants = {
       hidden: { opacity: 0 },
       visible: {
         opacity: 1,
         transition: {
           staggerChildren: 0.4,
         },
       },
     };
   
     const paragraphVariants = {
       hidden: { opacity: 0, y: 20 },
       visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
     };
   

  const products = [
    { img: dogFood, title: "Nutritious Dog Food", desc: "Dog Rice and Indomie" },
    { img: chicken, title: "Nutritious Dog Food", desc: "Chicken" },
    { img: fish, title: "Nutritious Dog Food", desc: "Dog Fish" },
    { img: canFood, title: "Nutritious Dog Food", desc: "Can Food" },
    { img: dogGlove, title: "Pet Accessories", desc: "Bathing Gloves" },
    { img: nailCutter, title: "Pet Accessories", desc: "Nail Cutter" },
    { img: dogWash, title: "Pet Accessories", desc: "Dog Perfume, Soap and Shampoo" },
    { img: dogLeash, title: "Pet Accessories", desc: "Padded Leash" },
    { img: dogAccessories, title: "Pet Accessories", desc: "Dog Collars" },
    { img: dogChain, title: "Pet Accessories", desc: "Chains" },
    { img: tickSpray, title: "Pet Acaricides", desc: "Tick Sprays" },
    { img: wash, title: "Pet Acaricides", desc: "Antitrax Wash & Amitraz" },
    { img: dewormer, title: "Dewormer", desc: "Shanuzole, Prazicare & Kesizole" },
  ];

  return (
    <motion.main variants={variants} initial="hidden" animate="visible" className="bg-gray-50">
      <Header />
      <div className="min-h-screen">

        {/* Hero Section */}
        <div className="relative">
          <div><Petaccessories /></div>
          <div className="absolute inset-0 backdrop-blur-[4px]" />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <p className="text-white text-2xl md:text-4xl font-bold">Pet Accessories & Dog Food</p>
          </div>
        </div>

        {/* Description */}
        <section className="px-4 md:px-16 py-6 text-gray-700 space-y-4 max-w-5xl mx-auto">
          <motion.p variants={paragraphVariants}>
            At Trekarios, we know that keeping your dogs well fed and stylish is part of loving them right! That's why we stock a range of quality pet accessories and nutritious food options to meet your dog's daily needs.
          </motion.p>

            <motion.section variants={paragraphVariants}>
                <h1 className="text-red-500 text-2xl font-semibold">What we Offer?</h1>
                <ul className="list-disc list-inside">
                    <li>Dog Food: Rice, Indomie, Chicken, and more</li>
                    <li>Pet Accessories: Leashes, Collars, Feeding Bowls, Grooming Items, etc.</li>
                </ul>
            </motion.section>
         
            <motion.section variants={paragraphVariants}>
                <p>Whether you're picking up your pets after treatment or boarding, or just stopping by, you'll find everything you need to keep your furry friend happy and healthy.</p>
                <p>Visit Trekarios for reliable products your pets will love.</p>
                <p className="font-semibold">Check out some of our products below:</p>
            </motion.section>
         
        </section>

        {/* Products Section */}
        <section className="py-8 px-4 md:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-4 transition-transform hover:scale-[1.02] hover:shadow-lg">
                <img
                  src={item.img}
                  alt={item.desc}
                  loading="lazy"
                  className="rounded-xl h-72 w-full object-cover"
                />
                <h3 className="text-xl font-semibold text-red-500 mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </motion.main>
  );
};

export default PetAccessories;
